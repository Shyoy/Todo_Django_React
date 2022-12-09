class Config {
    public supportEmail = "support@northwind.com";
    public supportPhone = "031234567";
    public supportPage = "";
    
 
    public todosUrl = "api/todos/";
    public todoImagesUrl = "";
}


class DevelopmentConfig extends Config {
    // public supportPage = "http://northwnd.com/it-support/";
    
    public todosUrl = "http://localhost:8000/api/todos/";
    // public todoImagesUrl = "http://localhost:3030/api/products/images/";
}

class TestConfig extends Config {
    // public supportPage = "http://northwnd.com/qa-support/";
    
    public todosUrl = "http://localhost:8000/api/todos/";
    // public productImagesUrl = "http://localhost:8000/api/todos/";
}

// class ProductionConfig extends Config {
//     public supportPage = "http://northwnd.com/support/";

//     public productsUrl = "http://localhost:3030/api/products/";
//     public productImagesUrl = "http://localhost:3030/api/products/images/";
// }


let config = new Config();

if (process.env.NODE_ENV === "development") {
    config = new DevelopmentConfig();
}
else if (process.env.NODE_ENV === "test") {
    config = new TestConfig();
}
// else if(process.env.NODE_ENV === "production") { 
//     config = new ProductionConfig();
// }

export default config;