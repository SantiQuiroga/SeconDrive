-- Create User table
CREATE TABLE "User" (
  "userId" SERIAL PRIMARY KEY,
  "firstName" VARCHAR(255),
  "lastName" VARCHAR(255),
  "email" VARCHAR(255) UNIQUE,
  "password" VARCHAR(255),
  "streetAddress" VARCHAR(255),
  "building" VARCHAR(255),
  "zipCode" VARCHAR(255),
  "city" VARCHAR(255),
  "country" VARCHAR(255),
  "phone" VARCHAR(255),
  "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "User_email_unique" UNIQUE ("email")
);

-- Create Category table
CREATE TABLE "Category" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255),
  "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Create Tax table
CREATE TABLE "Tax" (
  "taxId" SERIAL PRIMARY KEY,
  "zipCode" VARCHAR(255),
  "percentage" FLOAT,
  "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Create Product table
CREATE TABLE "Product" (
  "id" SERIAL PRIMARY KEY,
  "categoryId" INT,
  "name" VARCHAR(255),
  "description" VARCHAR(255),
  "brand" VARCHAR(255),
  "image" VARCHAR(255),
  "price" FLOAT,
  "stock" INT,
  "unitSold" INT,
  "discount" FLOAT,
  "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Product_categoryId_foreign" FOREIGN KEY ("categoryId") REFERENCES "Category"("id")
);

-- Create Cart table
CREATE TABLE "Cart" (
  "cartId" SERIAL PRIMARY KEY,
  "userId" INT UNIQUE,
  "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Cart_userId_unique" UNIQUE ("userId"),
  CONSTRAINT "Cart_userId_foreign" FOREIGN KEY ("userId") REFERENCES "User"("userId")
);

-- Create CartProduct table
CREATE TABLE "CartProduct" (
  "cartProductId" SERIAL PRIMARY KEY,
  "cartId" INT,
  "productId" INT,
  "quantity" INT,
  "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "CartProduct_cartId_foreign" FOREIGN KEY ("cartId") REFERENCES "Cart"("cartId"),
  CONSTRAINT "CartProduct_productId_foreign" FOREIGN KEY ("productId") REFERENCES "Product"("id")
);

-- Create Order table
CREATE TABLE "Order" (
  "orderId" SERIAL PRIMARY KEY,
  "cartId" INT UNIQUE,
  "taxId" INT,
  "shippingAddress" VARCHAR(255),
  "billingAddress" VARCHAR(255),
  "invoiceDetails" VARCHAR(255),
  "timeEstimation" VARCHAR(255),
  "createdAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Order_cartId_unique" UNIQUE ("cartId"),
  CONSTRAINT "Order_cartId_foreign" FOREIGN KEY ("cartId") REFERENCES "Cart"("cartId"),
  CONSTRAINT "Order_taxId_foreign" FOREIGN KEY ("taxId") REFERENCES "Tax"("taxId")
);
