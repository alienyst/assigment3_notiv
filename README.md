# p2-cms-customer-server Career Portal
This app has:
* RESTful endpoint for app's CRUD operation
* JSON formatted response

## RESTful endpoints

1. Method | Route 
| ------ | -----    
| POST   | /customer/register  

> Register an account

<br>

### Request Header
>Not needed

<br>

### Request Body
```javascript
{
    "email": "example@gmail.com",
    "password" : "password"
}
```
<br>

### Response(200 - Ok)

```javascript
{
    "id": "1",
    "email" : "example@gmail.com"
}
```

2. Method | Route 
| ------ | -----    
| POST   | /customer/login  
> login

<br>

#### Request Header
>Not needed

<br>

#### Request Body
```javascript
{
    "email": "example@gmail.com",
    "password" : "password"
}
```
<br>

#### Response(200 - Ok)

```javascript
{
    "accessToken": "your_access_token"
}
```


