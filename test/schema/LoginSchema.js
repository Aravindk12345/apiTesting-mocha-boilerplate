/** This ia a example login schema for the login response having userid, isverfied status, authtoken and refreshtoken
        here we are validating the id type as int, isverified status as bool auth and ref token as string **/

exports.loginSchema =
    {
        "type": "object",
        "properties": {
            "status": {
                "type": "string"
            },
            "data": {
                "type": "object",
                "properties": {
                    "user": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "integer"
                            },
                            "isVerified": {
                                "type": "boolean"
                            },
                            "token": {
                                "type": "object",
                                "properties": {
                                    "authToken": {
                                        "type": "string"
                                    },
                                    "refreshToken": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "authToken",
                                    "refreshToken"
                                ]
                            }
                        },
                        "required": [
                            "id",
                            "isVerified",
                            "token"
                        ]
                    }
                },
                "required": [
                    "user"
                ]
            }
        },
        "required": [
            "status",
            "data"
        ]
    };
