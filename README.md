# Fast8 Recruitment

---

## Guidance Installation

-   `npm install`
-   `cd src`
-   `npx sequelize db:create`
-   `npx sequelize db:migrate`
-   `cd ..`
-   `npm run dev`

---

## API Documentation

### Fibonaci Number

##### URL : `{{url}}/api/fibonacci`

##### METHOD: `POST`

##### BODY:

```no-highlight
{
    "n": 50
}
```

##### Response:

```JSON
{
    "status": 200,
    "code": "200",
    "data": {
        "result": "0 1 1 2 3 5 8 13 21 34"
    },
    "message": "Success"
}
```

##### ERROR RESPONSE:

```JSON
{
  "status": 400,
  "code": "400",
  "data": null,
  "message": "n is required"
}
```

### Combination Number Factorial

##### URL : `{{url}}/api/combination`

##### METHOD: `POST`

##### BODY:

```no-highlight
{
    "n": 4,
    "r": 2
}
```

##### Response:

```JSON
{
    "status": 200,
    "code": "200",
    "data": {
        "result": 6
    },
    "message": "Success"
}
```

##### ERROR RESPONSE:

```JSON
{
  "status": 400,
  "code": "400",
  "data": null,
  "message": "n or r is required"
}
```

### API Companies and Employee

**Companies**

### Create New Company

#### URL: `{{url}}/api/companies`

#### METHOD: `POST`

#### BODY:

```no-highligth
{
    "company_name": "",
    "telephone_number": "",
    "address": ""
}
```

#### RESPONSE:

```JSON
{
    "status": 201,
    "code": "201",
    "data": {
        "id": 6
    },
    "message": "Success"
}
```

#### ERROR RESPONSE:

```JSON
{
    "status": 409,
    "code": "409",
    "data": null,
    "message": "Company Name already exist"
}
```

```JSON
{
  "status": 400,
  "code": "400",
  "data": null,
  "message": "company_name is required"
}
```

### List Company

#### URL: `/api/companies`

#### METHOD: `GET`

#### BODY:

```

```

#### RESPONSE:

```JSON
{
    "status": 200,
    "code": "200",
    "data": {
        "count": 6,
        "rows": [
            {
                "id": 1,
                "company_name": "fariscorp",
                "telephone_number": "08112448977",
                "is_active": true,
                "address": "Jakarta, Indonesia"
            },
            {
                "id": 2,
                "company_name": "farisarmap",
                "telephone_number": "",
                "is_active": true,
                "address": ""
            },
            {
                "id": 3,
                "company_name": "johndoecorp",
                "telephone_number": "08123456789",
                "is_active": false,
                "address": "jakarta, indonesia"
            },
            {
                "id": 4,
                "company_name": "blackhouse",
                "telephone_number": "081273627892",
                "is_active": true,
                "address": "jakarta, indonesia"
            },
            {
                "id": 5,
                "company_name": "bluehouse",
                "telephone_number": "081273627892",
                "is_active": true,
                "address": "jakarta, indonesia"
            },
            {
                "id": 6,
                "company_name": "GREENHOUSE",
                "telephone_number": "081273627892",
                "is_active": false,
                "address": "jakarta, indonesia"
            }
        ]
    }
}
```

#### ERROR RESPONSE:

```JSON
{
  "status": 422,
  "code": "422",
  "data": null,
  "message": "Data is not found"
}
```

### Update Company is_active

#### URL: `{{url}}/api/companies/:id/set_active`

#### METHOD: `PUT`

#### BODY:

```no-highlight

```

#### RESPONSE:

```JSON
{
    "status": 201,
    "code": "201",
    "data": {
        "id": 6,
        "is_active": true
    },
    "message": "Success"
}
```

#### ERROR RESPONSE:

```JSON
{
  "status": 422,
  "code": "422",
  "data": null,
  "message": "Data is not found"
}
```

```JSON
{
    "status": 400,
    "code": "400",
    "data": null,
    "message": "Company is already active"
}
```

**Employees**

### Get Employees by Company ID

#### URL: `{{url}}/api/companies/:id/employees`

#### METHOD: `GET`

#### BODY:

```no-highlight

```

#### RESPONSE:

```JSON
{
    "status": 200,
    "code": "200",
    "data": {
        "id": 3,
        "company_name": "johndoecorp",
        "is_active": false,
        "employees": [
            {
                "id": 9,
                "name": "johny doe loe",
                "phone_number": "081273829273",
                "jobtitle": "director"
            },
            {
                "id": 10,
                "name": "roni doe",
                "phone_number": "08123y172371",
                "jobtitle": "manager"
            }
        ]
    },
    "message": "Success"
}
```

#### ERROR RESPONSE:

```JSON
{
  "status": 422,
  "code": "422",
  "data": null,
  "message": "Data is not found"
}
```

### Get Employee By ID

#### URL: `{{url}}/api/employees/:id`

#### METHOD: `GET`

#### BODY:

```no-highlight

```

#### RESPONSE:

```JSON
{
    "status": 200,
    "code": "200",
    "data": {
        "id": 7,
        "name": "faris sarma",
        "phone_number": "0811223232",
        "jobtitle": "staff"
    },
    "message": "Success"
}
```

#### ERROR RESPONSE:

```JSON
{
  "status": 422,
  "code": "422",
  "data": null,
  "message": "Data is not found"
}
```

### Add Employee

#### URL: `{{url}}/api/companies/:company_id/employees`

#### METHOD: `POST`

#### BODY:

```no-highlight
{
    "name": "",
    "email": "",
    "phone_number": "",
    "jobtitle": ""
}
```

#### RESPONSE:

```JSON
{
    "status": 201,
    "code": "201",
    "data": {
        "id": 11,
        "company_id": 3
    },
    "message": "Success"
}
```

#### ERROR RESPONSE:

```JSON
{
  "status": 400,
  "code": "400",
  "data": null,
  "message": "name is required"
}
```

```JSON
{
  "status": 409,
  "code": "409",
  "data": null,
  "message": "Email already exist"
}
```

### Update Employee

#### URL: `{{url}}/api/companies/:company_id/employees/:employee_id`

#### METHOD: `PUT`

#### BODY:

```no-highlight
{
    "name": "",
    "phone_number": "",
    "jobtitle": "",
    "email": ""
}
```

#### RESPONSE:

```JSON
{
    "status": 201,
    "code": "201",
    "data": {
        "id": 8,
        "company_id": 2
    },
    "message": "Success"
}
```

#### ERROR RESPONSE:

```JSON
{
  "status": 400,
  "code": "400",
  "data": null,
  "message": "name is required"
}
```

```JSON
{
  "status": 409,
  "code": "409",
  "data": null,
  "message": "Email already exist"
}
```

### Delete Employee By ID

#### URL: `{{url}}/api/employees/:id`

#### METHOD: `DELETE`

#### BODY:

```no-highlight

```

#### RESPONSE:

```JSON

```

#### ERROR RESPONSE:

```JSON

```

---

### GET DATA FROM PUBLIC API

#### URL: `{{url}}/api/countries`

#### METHOD: `GET`

#### BODY:

```no-highlight
]
```

#### RESPONSE:

```JSON
{
    "status": 200,
    "code": "200",
    "data": [
        {
            "name": "Afghanistan",
            "topLevelDomain": [
                ".af"
            ],
            "alpha2Code": "AF",
            "alpha3Code": "AFG",
            "callingCodes": [
                "93"
            ],
            "capital": "Kabul",
            "altSpellings": [
                "AF",
                "Afġānistān"
            ],
            "region": "Asia",
            "subregion": "Southern Asia",
            "population": 27657145,
            "latlng": [
                33,
                65
            ],
            "demonym": "Afghan",
            "area": 652230,
            "gini": 27.8,
            "timezones": [
                "UTC+04:30"
            ],
            "borders": [
                "IRN",
                "PAK",
                "TKM",
                "UZB",
                "TJK",
                "CHN"
            ],
            "nativeName": "افغانستان",
            "numericCode": "004",
            "currencies": [
                {
                    "code": "AFN",
                    "name": "Afghan afghani",
                    "symbol": "؋"
                }
            ],
            "languages": [
                {
                    "iso639_1": "ps",
                    "iso639_2": "pus",
                    "name": "Pashto",
                    "nativeName": "پښتو"
                },
                {
                    "iso639_1": "uz",
                    "iso639_2": "uzb",
                    "name": "Uzbek",
                    "nativeName": "Oʻzbek"
                },
                {
                    "iso639_1": "tk",
                    "iso639_2": "tuk",
                    "name": "Turkmen",
                    "nativeName": "Türkmen"
                }
            ],
            "translations": {
                "de": "Afghanistan",
                "es": "Afganistán",
                "fr": "Afghanistan",
                "ja": "アフガニスタン",
                "it": "Afghanistan",
                "br": "Afeganistão",
                "pt": "Afeganistão",
                "nl": "Afghanistan",
                "hr": "Afganistan",
                "fa": "افغانستان"
            },
            "flag": "https://restcountries.eu/data/afg.svg",
            "regionalBlocs": [
                {
                    "acronym": "SAARC",
                    "name": "South Asian Association for Regional Cooperation",
                    "otherAcronyms": [],
                    "otherNames": []
                }
            ],
            "cioc": "AFG"
        },
    ]
}
```

#### ERROR RESPONSE:

```JSON
{
  "status": 400,
  "code": "400",
  "data": null,
  "message": "Something Went Wrong"
}
```
