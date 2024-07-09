#   Basic Paytm MERN
This is a very barebone implementation of a popular online payment and transaction app PAYTM . Here . I have used MERN , to handle frontend and backend . The major implmented feature is that it incoprates transaction and authentication .

## Flow chart 
<!-- Can change this flow chart to sequece diagram by changing graph LR to  sequenceDiagram  learn more about it in -->

```mermaid

graph LR
A[User]-- localhost/3000 --> B((/api/v1))
B --> C(Auth)
C --> D(/signin)
C --> E(/signup)
D --> F{/dashboard}
E --> F
F --> /sendMoney


```

## Images
<a href="https://ibb.co/k1x3kZW"><img src="https://i.ibb.co/m8Gv1pM/img19.jpg" alt="img19" border="0"></a>
<a href="https://ibb.co/KGf1stT"><img src="https://i.ibb.co/cvZm8W4/img5.jpg" alt="img5" border="0"></a>
<a href="https://ibb.co/HK5hSw2"><img src="https://i.ibb.co/YNH0CnW/img15.jpg" alt="img15" border="0"></a>
<a href="https://ibb.co/ZBhFvCL"><img src="https://i.ibb.co/c6NZRdg/img11.jpg" alt="img11" border="0"></a>

# Video
[paytmSample.webm](https://github.com/sumitbhuia/basic-paytm-MERN-/assets/110191269/2041daa0-6d79-4cd6-b1fd-cdf6b732618c)
