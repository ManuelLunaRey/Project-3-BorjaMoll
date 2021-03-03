db.restaurants.aggregate([
    {
            $lookup : {
                from : "dishes",
                localField : "dishes_ID",
                forigField: "platos",
                AS: "COMMON"
            }
    }
])