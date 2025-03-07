import React, { useState } from 'react';

const LargeClientScroller = () => {
  // Array with id and url
  const clients = [
    { id: 1, url: "https://upload.wikimedia.org/wikipedia/commons/2/25/HONOR_Logo.png" },
    { id: 2, url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { id: 3, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/2560px-F1.svg.png" },
    { id: 4, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Angel_One_Logo.svg/2560px-Angel_One_Logo.svg.png" },
    { id: 5, url: "https://1000logos.net/wp-content/uploads/2020/07/Weatherford-Logo.png" },
    { id: 6, url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Dubai-police-logo-vector.png" },
    { id: 7, url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/TotalEnergies_logo.svg/800px-TotalEnergies_logo.svg.png" },
    { id: 8, url: "https://media.licdn.com/dms/image/v2/C510BAQFTP_J1f7dwjA/company-logo_200_200/company-logo_200_200/0/1630575257513/radiant_filters_logo?e=2147483647&v=beta&t=pNYGaWiWeWLTCNTy3Wo43jiLJWBsUt0P8FM2B09Bo1Q" },
    { id: 9, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUPm51VBHSXismHQ6jJd6oksqwF-TWgYNOw&s" },
    { id: 10, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm_22ykWNuNzhS709cPSQlY3dBVTKyvi2Qhg&s" },
    { id: 11, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48UhIN3Km65j9tLKkLf3TnDG8zWF2cwBXEA&s" },
    { id: 12, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaLtYCdonMh1xnfnGyWHAVldOfv1Ro-DIfg&s" },
    { id: 13, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzByzyCT0jxgor3Sl2traPaXV1qxGeeXrDmA&s" },
    { id: 14, url: "https://makruzz.com/images/makruzz-logo.png" },
    { id: 15, url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGRgYGBgXFxgaHRgaGBoWFxoYGBcaHSggGBolHxgWITEhJSkrLi4uGh8zODMsNygtLisBCgoKDg0OGhAQFy0dHyUrKy0wKy03LS0wKzAvLS8tKy0rLystLSsrLS0rLS0tKy0tLS0tLS0tLS8tLS0tKy0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgADBQYEB//EAEIQAAEDAQUFBgUBBQcDBQAAAAEAAhEhAzFBUfAEEmFxgQWRobHB0QYTIuHxMhQjQlJiM0NygpKiwjRTkxZUY3Oy/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAEDAgT/xAAuEQACAgEDAgUCBgMBAAAAAAAAAQIRAxIhMTJREyJBYZFxsRQjM2Kh8ELh8QT/2gAMAwEAAhEDEQA/AOLv8/IpLWPz1pfx8FU12Pd6+iZ5EcdUPcV6TyHncMbp8ZyAUY7JB+WI/KMRXAfdQoC+MT56KuAyw5cud8KgRf1BI971YH1jO/jrJAGlDFPfP2SB9fsgSPbClfukaak3mnT3QFrLSvH85Y3out5ERfSpuSsOGWXOa6xCPWgwP4rVAGzcCSIvpnx6JbZprXpXWCBZMEXiD53eSLjPPHDqgKjflhwyUn1TPs4w1qErW0n24e3moUZjzQxGjXgrWhsHPp38fwqSNdcFYw0u4z7HBCEGM5AnuRfS7KLh1rq9KBQ9ygdXQuVAN7PM45qF8569L0Ji7H7H0SkZZeNVCjB/vjdl6dEpdxBw7teKDhr76vSmSRlrXRAS1d08kCbzhTpTzontBhcKfnWarcYwpqteRQEBz4jWV6UujXK5GKV1kAkBz11UKW70RmJrz8kZiZIwzr9lWCb0BSuFfO9UFm6P5dd6iHzDx7wogNBz8rsBWapXgXAdOt/koDxujvwSg14cMsPRU5IWwIx91XWeeuiYkeWF9UBZ680AC04/lOAARnMd6LGzQDWoQtGZSa0N/VAS3gCRr2VJbQTXh4q15pF/dNKa5Ly2hgjjMKFL2kYd+A5dytpAJnV1MqheZhKbaHEQKdMTUX9UIM+2NSKC4QNZpGvurNb8TcYvSDI6v9kSIuu13oUbfONRcnYZzwrlTLPgtey7JsPl2dpa2xYbQSBE3UgQOMqzZ9h2QTu7Sa0/SfKFl40ff4NfAl7fKMMHWrkzXUAFOVB11itd+w7HjtTh/lPsozYdjB/6t3+k+yeKuz+GPAl3XyjMGBvrw4+GdFXjwjrz7lvs7I2cstX2du5+4xziIyBOIzCwH8dTOuq7jNS4OZ43HkUHurqEBiOInrh4IA80SL5z4Z/ldHAsVqUp4eeuKkmh8+NZ8fFQNF96AAJrnf6hEHGdURDb/HVVAR0134HqgFPHn5VULZrCZ/IjikAu/KAkwoWzEDXFFonAotcRz8BkNZIBPkag+6is+bqCogL2uzTtdyjUYVQFmLq9yssvCazTuzVIA8sM7lGdJHM1r0QtHgigia6CNpa4cqBCELo179V5xtJJTWxJiPUZ1VIbjPrncoUtJprzULIxUHKnTXVQNvoaIUJuym/GTd7IWzZEfxZZdeSjXZ9MU7DiOV9904IQ8Qcbj3XKx7yQBnnrjC9DwDVwnCSa9NZKp9gOVNShTZ7Y/wCk2U8HUHIeCw2NPCI9Jvjw5Lese2bH5VnZWlh8z5YgEnxFF6tj2/ZrR7LP9lA3nBs713GIqvPGUoJ3HuemUYzaqS9O5yxYRkacT1QLKTx11XW2m0bM23+T+yNnfDJ3syBvRHFJ2rt+yWNq+ydsjXbpFZiZaDdHGFVlb/xf8EeFLfUv5PH8MGbHbP8A6T5WiwRaGBN93iuhHxBYCztGWeyizNowsJDgbwQJEViZXOuNOC6x3bbVHOStMUndDgcaolJF1bggCtDIYS5wABqcs+abDho14JQda5KxrKVNNHuVIITFCL/z7pXCTA6Vi6+T4qOEkUvnLvUszPp3ygGtRd1rETxhAnv9/JS0eB7YmtBAQc2L9FQoaa1VF5vAHP8APsq+AE4+OXVG0nDVc5u90IWbp4/6h7oKrdGfj9lEKbAccOXXEl3hcqnGeJ86KPdkbqCLhzJvVYaZmBA8Tx1iujkGu8jpmmbW4+CBJgGvCmSAaft43IADlF+uFyVWWlpQACM9YUwVTm3zU+SgA8QbxyHhTBKQREXzuxril2dxvdeZNL6U+yttHQBzy1wQoN09BrXMpteP2QbOPprAqZYnhjPib0AHmLhhfyVYfH38PRdF2f8ADL7SHWn7tsCkfURyN1157l7Tt2xbNSzb8x4xH1Rh+s0HRYSzq6juzeP/AJ3Vyele5z2zdj29oBu2TiDifpHeYlbfYvw1bstGPduNDXAkbxJ8BXvXl2n4ut3foDWD/UR1NPBZ7+2dodfbP6OjwbCjWaS9EdJ4YO92dRtHwy920/PD2gb4dEGYDgY50Xl7e+Fra1t7S1YWFr4MFxBo1rcowzXOfttr/wB60n/G7uvVtj2vtDYi2tOrifAyFysWVb6l2K8uJppxfcG0/De02dXWbiIrufXHcsy0aQYN4w5YHvXTbH8YbQ0/VuvAv3gAaXwWx5Fabe3dh2r6dos9xxoHO9LRsEdYXWvJHqjf0OdGOXTKvqcK11blYyoEDE0zM3QK9y6rtb4KIHzNmd81t+7I3o/pdc7w6rmy0t+lwIIJEEEEReINy1hOM+DOeOUOUUNBN/4xT2LMXdw7kznjpXK+9VuOs7l2ZkI+wTgXa17KozLREk0gGLoNTcLlGvrFKU9JnwUKWYk53VrSfVAN1rokJvrem3hlxHVUDQNC+sKtwm4nX5Tb8c6+8qvezB+3ooB/mNz8QoqIGXgFEBrkj8KQYp4D0RddTXJCzIu84XRyVR7+RUD7gNZ+KJfSczNcaqtzpkaCAYurEX4148UpM8qogjH20UN3E0p7dygI31i/UqMN9bpN2qey9Wx7HvguJDWCAXumOQF7ncFa/aGWY/d2YP8AVaDeJyIb+lvWVy5ei3O1H1ex4WtmgFffh1XTdi7LY2QDt19ta5hjt1nBrngNHMlYh7Vtj/evHBpDR3DGqp37W1+kuc7i5xIHEyYCzyRlJU3SNMc4wdpWzZ+INtdaWJJtB+vcLLMy0DdJIc/+8ddMUE4rmootTtazbZhtgDO5LnHAvfEiMd0Bo71nOdX1VxRSjsTNJyluLGYx+6Ym4165IQNe/eg0z0yWpkHeyvooXdLqqMHvrxUisGt+esEAjnca/jog52GCEd+u5QmVCmp2L23a7Mf3bvpxY6rTnTA31C7D5ezdpskfu7do6jnEfMZ5TgvnjHQeXcrdm2hzHh7HEObVrgcfasHOVlPEnutmawytLS90W9sdnWti8stBBFOBH8zcwV5SYB1yX0HZ9psu07AstIZbsEyMDdvNx3Ti3DuK4Ta9lfZvdZvEOaYPuDxGKuPJq2fIyY9O63RSwkTF5pfelw1zvlTdmgiuJnVUouu5eVFoZE1VF8j9QvOvJQicOCZzpwQCn2v8lW8qwm6FUTJogDAy80U3yDoqIU1Ym/D8YKqATfTlw53IblfD7cFAYpTjPoF0cA0ddyR5vp01yVgbOr9US7vuoULm99wCt2OwNo9rQYM35CDXkBJ6KoWZcYEuJwvJ5ABe/ZGOZ87eBa5tk6hBB+otZMEZOK5k6R1CNsq23ag4gN/s20YPNx4m/rwVdhYkiAN4gVNwAuqTQC+9V7ON6+jQJcb4Ax4mt2cLQaGhge8ltlXdYCN60IoSfVxuuAUtRVIqTk7ZTs2yBx+kfMIEn+FjeLnmpHdzV79qbZx8shz6w5oizZxY3+N/9bui8e07Y543SAyzBgMbQDia/U7iZK80HkeRx68FNLfUXWl0ge/Ot0+JvSG6/VUxE01grdi2f5r2MFS8gDqYPhJ6FdvZHFWzzmYE6vARJ6QNXrV+Kuzfk7QQ1oDCA5vK4ieBB8FkTMyan25KRkpK0WUXF0xZgV1f7qNbnjhNe5OOQ49Pyuv7O+JNjZZMa/Zy5zWtDnfLszJAqZmT1UnJx4VnUIqXLo411Mdc0ntx4/Zd9/6r2H/2p/8AFZe64jbdqNpaOtN0DeM7rQAGjAAZCg6KQnKXMaLOEY8SsqA/KkDDLr1Xq7G7NdtFq2zbTeqT/K0Xnx71vfGO0WLC3ZrFjWizA33bomYoC4CTSpzMI5+ZRIoeVyOf7O211jaNtGSC0gnjQiD/AE4Quu+J9mbtmzN2qyH1MBJGMD9Q5tNZynMLhX1JjGg9+a6b4G7SLLU2Dv02l04PA9RI6BcZU+tco0wyXQ+Gc4TcdZU1ilrxy1K0O3+zxYW7mR9J+pv+E1AHK7os8OPDBappqzGSadMMx7KBAuzSug3qkIZnMJ2tESePXokPNFzsBcgLN7gO77Iry/P/AKUUBp2VqCKQYRFQc/LXFC0wGA8OCVoiPfrCpyWPs4rImvWJVbaAd9EXkZUzBhIbM01MIU0OynQLUj9QszBF9XNafAkK/s7bZZaWTzILHbribiIduzgDApmBmvP2MJeW/wA7HsEZlsjxDV4X9M6LNxTbTNFJxSa9zR2PZw7ca6Q0zavOTGSI50d/qC8m3bUbR+8YAoA3ADBowgL3T+7tnf8Ax2LByeWuP/5KyJuqkd22JbJIeDSawdVSk3ADV+PVKx/vrxRb7X9L/FaGYS7nN+OsF03wJsm9autHRFm2h4umvQBy5h1MOEzgOHcvR2f2w6ya9rLrVhYRlMfVziR1XGROUWkaYpKM02dZ8W7u0bLZ7VZ3NP8Atcd2vJwb3riXcNYa5rsfgi0FtY2+yPxBI5OoY5EA9VyFpYlhLXfqaSCMiCZ8lnh8tw7GmbzVPuKK11xTuFI8Z4pZ4a9kOuuC3POB5gpLQceCmK6T4N7I+ba/NeP3dlWTc52XIXnpmuJyUVbO4RcnSNPs9g7P2M2rh+/tYDQcJEtbyFXHuyXEOcS4udJcTJJxJMnvW18T9qnabaRG4yjOWLutPBY3Fc4o1u+Wd5ZJ+WPCJddfeo21LHBwNWkFvMQR6ISqy0XT58/VaMyOv+NGC0srHaG8ujxvDuIPeuUERnrwXVbO75nZjgb2B3+x28PBcm0hY4dk49mb592pd0Vm0yGeuGKm7CfnzRdwrq5bGBW596hPnryUJ+6DTzPpkhQwP5VFK6hRAaosiYAPCe6qjxGj5q1tpQmIm7lgqpFCeMXX4caLo4A3IxnTXBVvfhefWL0zgCVHdfPj6qANhblrg9t7TI6EK7tWwDbV27+l0PYf6X/UO67ovLTxuOAw6rRYDa2O7H12QLm/1WZq4DMtP1DgXZLmWzs7juqLN0nZn5btkZ/wWj2HwLe9ZJdQ8Na5rZ7CbvtfY4ua4Dm6P+bbPvKx3Nujlqqkdm0dT3SZXHn1xSEwrCIxuFOkVSubS6/ULszPO+/UVUFBC97the6xdbAfQ1zWGP6gTXwH+YLwlmdNYLmzqjY+E+0TZbSxxNC4Nd/hf9NZyoei0Pjvs/5e1F0Q21AcOcw7rIB/zLnGtEEd67jt4/tXZtlbir7KN7j/AAP8d13JZT8s1Lvsaw80HHtucO9+q6KSOalpU9E0i7Q+62MS7Ytjda2jbNg+pxH5Pcut+J9qbs2zt2OyNSPrOO6b54uM9EPhrZm7Js7trtR9Th9AN+6f0gcXGOnVcntO1PtHutHkFzjP45UCw/Un7L7m/wCnD3f2Kp1rmkc88MEJp368lC7XtK3MAudQ0pdyql3b649+qJi2njrJVtNK+OuCA6z4aM7Jbtmkv8WBcqdcl0/w6d3ZLd2BL46MAXMtGvNYY+qX1N8vRD6EHGhjwv8AZKL7keGr0HPvW5gE3DDlVVk35flA2nPvuQcMVCk3Aoj8riNdVEBtTQT+mouwvv5ykZaXxddr8qOiuPW4pSC6mE/eMs12cE5Vk34eN6V4itZ0FYHTfVUgV6R9/NQEnjzhW7NbuY9r2mC0yPARy9FXWKxnj5JtmsXPIaxpc7Jo88qI69Sq/Q0bc/LczaLEfQTdJ+h8fXZnvp/SeCXt+wG+LazrZ2w328D/ABtPEHzC9OwbK5hLHusXMcIfZfOs96Zo4V3Q8VIrwTO2N1k47JbH6LQg2dpcA/8AgfwaaNcPZY2k9v6jfS3Hdf8Af9mBHU8KX5dUI5XZ5Y8VLRjmFzHNLS0kEYyKR+Fodg7D8/aLOzihdLowa0S4E8buq1cklZik26Oj7Qb+zdmMsz+u2IJmJEn5h7gGt7lxUesXawXT/H23B+0izn6bJoEf1O+o+G6OhXLvOM5rLCvLb9dzXO/NS9Nib0CRj+M4hdh8CbS17bfZXkFr2lwHAjcf5t7lxsXey93YW2fJt2WmAI3v8Jo7nQrrLHVFo5xS0zTPJtdi6ze6zcasJaeYN/LHqtX4V7J/aLX6h+7bBfShyaOePCV7vjfs937S1zAT84CAMXiGnvBYtDtO1bsOyCxYR818yRmaOf0oAsnkbitPLNY4kpvVwjH+M+2fm2vymH93ZyKYvuJHK4dVzw53KTHDXmgW61qq2hFRVIxnJydsZ3OihaZCgNJwi7wQc7PuXRyF7vGvdwSx9kCZ9VfY2W85rRUuMDqYnxnopYSOgb+77P4uB677vULlxPXXguj+KrYAWdiDAAkgZD6W/wDJc8IF2sVjh41d2b5+pR7IBPGSkAnJEOMcEuHgtzEB15pHu7s/FWFKb1ACuR7j7qJ9/j4qIU0wYjHWXeo18meNTSTS7lVVY64fdR5nXj910cFrbTPxVbjica93VBrjjdnrmiw1y48jgO7uQEbUeArf7LUEssLNjKOt3P3jm0ODAzeAumSemSyHWsuIEwBn3YLS2S2Y+zFi924Wkus3mS0b36mPIqAYBDsCMiuJncC+1ZsrXusSLQbrtw2sj9QME/L3f0A5GYQsrbdLtl2g/Q0lodf8lzTuhzcS00kZVoUz9jJeLXabazLRBO69j3WgFA1rWG83SbpmVlbbtRtLR9oabzi4jmZjpTwXKVnbdf30NTt6wcQ20eIe0mytR/WwDcfxD2VnHdJXt+Ctt2fZzaWtq8B0brGwSYvNQIrDQrOzHftWzWtn/eMZEZhkusncwQ6z5PbkuSAEX0gfnWaiWqLgyt6ZKaPRte0ue9z3XvJcebiaLzHRyhWHPhmOBwQIFw8fZamIu+AJ9MK9/wBkpukyUIz8skcJJ6DrVAd32P8AEGzmxsjbPAtLMRUEkEAtmQMQk2/bOzrZ2/aPDnQBM2lwugCi4Qzj3IZYLz/h1dptHo/EuqaTOy3Oy+HfapC3szMd9quPaNcecols9xN+q3K+D+5k8f8Aajro7OwjvtV4O1xsfyz8kj5kiKvukTfS5YB17pHug89a5qrFTvUw8tqtKLA/nqi3vhjZb7Z9zZAJzxPQU6lY3ZmxutX7repyGfjC2viHa22bBs9nw3uV8czefupld+ReoxRrzvhfcxe0NrNraOfmaDgKDqvOGwlYfLuVhMDp3LZKlRi227AQgTOGuCIOtdEEApw7lI5INF6Bpx/KAavDxUXnrmfFRAbrq5X6KqtIHGfXDiplf7nHog92GGsV0cjZnGg9+iRup4wi0d9PtXmg5sHjhzm+UABQx1N16FoIBOA88qqMf4Hpl7oO7hqnj4KABnERhhyuTmcI8OSVtL8vKl+r0jrTKLxPLXmhTX+Gu0vkbSx5/TIY8ze11Ca4Aweip7V2A2do+Ww35lo1pihDHEQMqYLwMbicV13YHblhaWX7LtLGgVhxoHEm9x/hfX9Xks53F6krNYJSWlujkSacrhnxnvSNdxiRx8sF0vbvwlaWcusP3lnfA/UOg/UOI7lzLzBgzlB8o711GakrRxOEoumib0nOv2RJ/FMY11QZrvRLaV1f1yXRyA87wfOfLJK06hM0gETnnfyNUjjcPdAEzCUDPWqqXYKObPFCkb6eV9VbsmyutHhrBLvAA3k5Be/s7sK0tKu+hhrJvONBoLR2rtCy2Zps7EAuxN8HNxxPDyWMsu+mO7NoYttU9kG1tGbHZbrfqtXXnPicgMB91zNoSSSakmTW8lS2tXOJc4yTUklKYVxw088nOTJq2WyCweVUYFyDRdz8NeSVzvXXFaGY29GuKUlA96MoASgHKEU1wQ3jrvQBroqKb4z8FEKaAuEVy1q5TjFQIA1cqhaGhjlhTOE5IMxNLuY4xzVOC0Dp1y4qAgGccJ80B5YeM96m73Gt3d0VBU20wAuHll4I5eN1M4GaYWfGPtXpii8jpTzjBAVh14w4IfK3a+F9US/AUPolLjF/d33eqgC4wI89cVCMUC/WvJHexN+vdCmr2R8Q21hDQd9n8jrh/hN7fLgtx/aew7V/bNFnaGkmh/8AIL+q42J/POapbSn46LKWKLd8M1jmlFVyvc6u2+Dmn6rK2BGG8J/3t9lmWvwztI/ha7k4esLJ2a3c3+zc5p4OIw4QtCz7c2kR+9dEfxBpPOoXOnKuHZ1qxPlNfQB7C2r/ALRyq5p9blLP4c2g3sA5ub6SUx+J9o/nH+lvsqrTt3aXf3pHINHon5vsPyfc07H4YP8AeWgAH8o/5GPJP83ZNn/T9bx/mPf+lq5q02h7/wBb3OORcTz5KouGsU8OUuqRfFjHpj8mr2j27a2kgfQ3IGp5u9oWU3VdQgDBxny6pg2mFVpGKiqRlKTk7bFB4VN+j1TR764JWm8KC8ro5C8C5LvZIudOuXt4oA1lAAU6+PsiTrBQv41uVbr6dEKMTq5BsmgBUIFyYWdJBi/H1xQDfJdw7yoqp5eCKA9bnDDrknBFNZ+68+9xTh0YSqcnp3uKjbTuwm7BefflDerRAehjppdXH73ovMYDlyuuvVMiiuBmswK/bxQFTrq+ChPeo40poJImRrUwgGFqIMaxUIrTz4a71A2E7XcfBAB5oQL8eHLRxVZ741RAYgDGvprigY7r8NZIB4rTx9EJPjTy9NQpPFRuvJAI3pr1RFTWqIHHpzUJ+yAUlIb0z8Lkp5eShRpwwSE+HioD9vdK7nrmgLNZ9fNDw1iAg12QjX3UGoQAeNXYqAFQ6pggCDndigFc28o7qenBVl0a4oUaVGxqdBCNQoTCAbd1X3UVe+3RUQDtKsFpnFfS+iob+UxcgHJ19kwcvO504pw4IKLDaFemzfAGNfReNpVoNEIWzhz80u/FQFXOARx64YIQsD5vN2qd6hu1kgx2FeuqJt7XcqCCIEapf4IQRrhkoHXzEUieKEx06a/KAMmddyEiZ1qiBdhQ+H4QcVAB1/ei00/KJPAZa7lW1ChcfTwUF12q4KB1c+vJVvfy5e6AjjFNZIzWpQaw30yg6ogwoUduF1c8AhvQSMMxIzqoMlN0oQAH2TSacKctVSuOihN6FJPuhM9MeSjkoUKOoCkjNGFSBhRLPBRAM3HWKPsoogKmIi7qoogHbeeSttf0nmUFEIQevqmF5UUQFo14qsXdW+YUUQFVr+kcwrDruUUQDvu1mg688yiogFN51ija3d/qoogKDdrNNYfqKiiFRba39fRUG4cx5KKIQb+EpHX6yRUQEP6e71Ud7eSiiFG2j28lSNd4UUUKR+Os0TcVFFSCqKKID//Z" },
    { id: 16, url: "https://nautica-ae.com/cdn/shop/files/nautica-logo_1200x1200.png?v=1671458121" },
    { id: 17, url: "https://media.licdn.com/dms/image/v2/C4D0BAQHLr4MxM6coWg/company-logo_200_200/company-logo_200_200/0/1631324885552?e=2147483647&v=beta&t=7KTtKSgv_g8wJiH5JSA_mOfsNhxV3XxQcKs4qKSf2dA" },
    { id: 18, url: "data:image/png;base64,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" }
  ];

  // Split clients into multiple rows for better display
  const [speed] = useState(30); // Animation speed in seconds

  return (
    <div id='contact' className="flex justify-center py-16 overflow-hidden" style={{ marginBottom: '20vh' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold y-10">Our Trusted Clients</h2>
        </div>

        {/* First row - moves left to right */}
        <div className="relative mb-12 overflow-hidden py-4">
          <div className="client-scroll-1 flex space-x-6">
            {clients.slice(0, 9).map((client) => (
              <div 
                key={client.id} 
                className="flex-none w-48 h-28 rounded-lg shadow-md flex items-center justify-center p-4 transition-all hover:shadow-lg"
              >
                <div className="text-center">
                  <img 
                    src={client.url} 
                    alt={`Client ${client.id}`} 
                    className="w-16 h-16 object-contain grayscale transition-all hover:grayscale-0"
                  />
                </div>
              </div>
            ))}

            {/* Duplicate for continuous scrolling */}
            {clients.slice(0, 9).map((client) => (
              <div 
                key={`dup1-${client.id}`} 
                className="flex-none w-48 h-28 rounded-lg shadow-md flex items-center justify-center p-4 transition-all hover:shadow-lg"
              >
                <div className="text-center">
                  <img 
                    src={client.url} 
                    alt={`Client ${client.id}`} 
                    className="w-16 h-16 object-contain grayscale transition-all hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second row - moves right to left (opposite direction) */}
        <div className="relative mb-12 overflow-hidden py-4">
          <div className="client-scroll-2 flex space-x-6">
            {clients.slice(9).map((client) => (
              <div 
                key={client.id} 
                className="flex-none w-48 h-28 rounded-lg shadow-md flex items-center justify-center p-4 transition-all hover:shadow-lg"
              >
                <div className="text-center">
                  <img 
                    src={client.url} 
                    alt={`Client ${client.id}`} 
                    className="w-16 h-16 object-contain grayscale transition-all hover:grayscale-0"
                  />
                </div>
              </div>
            ))}

            {/* Duplicate for continuous scrolling */}
            {clients.slice(9).map((client) => (
              <div 
                key={`dup2-${client.id}`} 
                className="flex-none w-48 h-28 rounded-lg shadow-md flex items-center justify-center p-4 transition-all hover:shadow-lg"
              >
                <div className="text-center">
                  <img 
                    src={client.url} 
                    alt={`Client ${client.id}`} 
                    className="w-16 h-16 object-contain grayscale transition-all hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .client-scroll-1 {
          display: flex;
          width: max-content;
          animation: scrollLeft ${speed}s linear infinite;
        }

        .client-scroll-2 {
          display: flex;
          width: max-content;
          animation: scrollRight ${speed}s linear infinite;
        }

        .client-scroll-1:hover,
        .client-scroll-2:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LargeClientScroller;
