import React, { useEffect, useRef } from 'react';

const BulgeTextEffect = ({ text = "amigoz" }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const textCanvasRef = useRef(null);
  
  useEffect(() => {
    // Main variables
    let canvas, ctx;
    let textCanvas, textCtx;
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;
    let strength = 50; // Bulge strength
    let radius = 50;  // Bulge radius
    let textImg;
    let animationFrameId;
    let pixelRatio = Math.min(window.devicePixelRatio, 2); // Limit max pixel ratio for performance
    let lastFrameTime = 0;
    let frameInterval = 1000 / 60; // Target 60fps
    
    // Initialize
    const init = () => {
      // Main canvas setup
      canvas = canvasRef.current;
      ctx = canvas.getContext('2d', { willReadFrequently: true }); // Optimize for frequent pixel manipulation
      
      // Text canvas setup
      textCanvas = textCanvasRef.current;
      textCtx = textCanvas.getContext('2d');
      
      // Set canvas sizes
      resizeCanvases();
      
      // Create text texture
      createTextTexture();
      
      // Start animation
      lastFrameTime = performance.now();
      animate();
      
      // Default mouse position in center if no movement
      setTimeout(() => {
        if (mouseX === 0 && mouseY === 0) {
          mouseX = window.innerWidth / 2;
          mouseY = window.innerHeight / 2;
          targetX = mouseX;
          targetY = mouseY;
        }
      }, 1000);
    };
    
    // Resize canvas to window size with optimized resolution
    const resizeCanvases = () => {
      if (!canvas || !textCanvas) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Set display size (css pixels)
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      textCanvas.style.width = `${width}px`;
      textCanvas.style.height = `${height}px`;
      
      // Set actual size in memory (scaled for pixel ratio)
      const scale = pixelRatio;
      canvas.width = Math.floor(width * scale);
      canvas.height = Math.floor(height * scale);
      textCanvas.width = Math.floor(width * scale);
      textCanvas.height = Math.floor(height * scale);
      
      // Scale the context to ensure correct drawing
      ctx.scale(scale, scale);
      textCtx.scale(scale, scale);
      
      // Recreate text texture after resize
      createTextTexture();
    };
    
    // Create the text texture
    const createTextTexture = () => {
      if (!textCanvas || !textCtx) return;
      
      textCtx.clearRect(0, 0, textCanvas.width / pixelRatio, textCanvas.height / pixelRatio);
      
      // Draw text
      textCtx.fillStyle = '#ffffff';
      textCtx.font = 'bold 20vw avant';
      textCtx.textAlign = 'center';
      textCtx.textBaseline = 'middle';
      textCtx.fillText(text, textCanvas.width / (2 * pixelRatio), textCanvas.height / (2 * pixelRatio));
      
      // Save the text image data
      textImg = textCtx.getImageData(0, 0, textCanvas.width, textCanvas.height);
    };
    
    // Mouse move handler
    const onMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };
    
    // Animation loop with frame rate control
    const animate = (timestamp) => {
      // Check if we need to render this frame
      if (timestamp - lastFrameTime >= frameInterval) {
        lastFrameTime = timestamp;
        
        // Smooth mouse following with reduced interpolation
        const dx = mouseX - targetX;
        const dy = mouseY - targetY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Adjusted easing to make the movement less laggy
        const easing = Math.min(0.1, 0.05 + (distance / 1000)); // Reduced interpolation value for smoother movement
        targetX += dx * easing;
        targetY += dy * easing;
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width / pixelRatio, canvas.height / pixelRatio);
        
        // Apply bulge effect
        drawBulgeEffect();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Draw optimized bulge effect
    const drawBulgeEffect = () => {
      if (!canvas || !ctx || !textImg) return;
      
      // Create a new image data object
      const bulgedImg = ctx.createImageData(canvas.width, canvas.height);
      const dstData = bulgedImg.data;
      const srcData = textImg.data;
      
      // Calculate scaled dimensions
      const scaledWidth = canvas.width;
      const scaledHeight = canvas.height;
      
      // Scaled target positions
      const scaledTargetX = targetX * pixelRatio;
      const scaledTargetY = targetY * pixelRatio;
      const scaledRadius = radius * pixelRatio;
      
      // For each pixel - consider using a skip factor for better performance
      const skipFactor = 1; // No skip for highest quality, increase for better performance
      for (let y = 0; y < scaledHeight; y += skipFactor) {
        for (let x = 0; x < scaledWidth; x += skipFactor) {
          // Calculate distance from mouse
          const dx = x - scaledTargetX;
          const dy = y - scaledTargetY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Calculate bulge effect (inverse of distance within radius)
          let bulgeAmount = 0;
          if (distance < scaledRadius) {
            // Enhanced smooth falloff with cubic easing
            const normalizedDist = distance / scaledRadius;
            bulgeAmount = (1 - normalizedDist * normalizedDist) * strength * pixelRatio;
          }
          
          // Calculate source coordinates with bulge
          let srcX = x;
          let srcY = y;
          
          if (distance > 0) {
            // Push pixels away from cursor based on distance
            srcX = x - (dx / distance) * bulgeAmount;
            srcY = y - (dy / distance) * bulgeAmount;
          }
          
          // Clamp coordinates to image bounds
          srcX = Math.max(0, Math.min(scaledWidth - 1, srcX));
          srcY = Math.max(0, Math.min(scaledHeight - 1, srcY));
          
          // Get integer and fractional parts for bilinear interpolation
          const srcXi = Math.floor(srcX);
          const srcYi = Math.floor(srcY);
          const srcXf = srcX - srcXi;
          const srcYf = srcY - srcYi;
          
          // Calculate indices for the 4 surrounding pixels
          const indexNW = (srcYi * scaledWidth + srcXi) * 4;
          const indexNE = (srcYi * scaledWidth + Math.min(srcXi + 1, scaledWidth - 1)) * 4;
          const indexSW = (Math.min(srcYi + 1, scaledHeight - 1) * scaledWidth + srcXi) * 4;
          const indexSE = (Math.min(srcYi + 1, scaledHeight - 1) * scaledWidth + Math.min(srcXi + 1, scaledWidth - 1)) * 4;
          
          // Process multiple pixels at once if using skipFactor > 1
          for (let sy = 0; sy < skipFactor && y + sy < scaledHeight; sy++) {
            for (let sx = 0; sx < skipFactor && x + sx < scaledWidth; sx++) {
              // Index in destination
              const dstIndex = ((y + sy) * scaledWidth + (x + sx)) * 4;
              
              // Bilinear interpolation for each color channel
              for (let i = 0; i < 4; i++) {
                const nw = srcData[indexNW + i];
                const ne = srcData[indexNE + i];
                const sw = srcData[indexSW + i];
                const se = srcData[indexSE + i];
                
                // Interpolate horizontally then vertically
                const top = nw + (ne - nw) * srcXf;
                const bottom = sw + (se - sw) * srcXf;
                dstData[dstIndex + i] = top + (bottom - top) * srcYf;
              }
            }
          }
        }
      }
      
      // Draw the bulged image
      ctx.putImageData(bulgedImg, 0, 0);
    };
    
    // Set up event listeners
    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', resizeCanvases);
    
    // Initialize
    init();
    
    // Cleanup on component unmount
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resizeCanvases);
      cancelAnimationFrame(animationFrameId);
    };
  }, [text]); // Re-run effect if text changes
  
  return (
    <div ref={containerRef} className="relative h-screen w-full bg-[url(./bg.png)] bg-cover overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full "
      />
      <canvas 
        ref={textCanvasRef} 
        className="hidden" // equivalent to display: none
      />
    </div>
  );
};

export default BulgeTextEffect;
