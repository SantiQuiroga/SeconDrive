INSERT INTO "User" ("firstName", "lastName","email", "password", "streetAddress", "building", "zipCode", "city", "country", "phone")

VALUES
  ('John', 'Doe', 'jhon_doe@gmail.com', '12345', '123 Main St', 'Apt 4', '12345', 'Cityville', 'Countryland', '+1234567890'),
  ('Jane', 'Smith', 'jane_smith@gmail.com', '54321', '456 Oak Ave', 'Suite 7', '56789', 'Townsville', 'Countryland', '+9876543210');

INSERT INTO "Cart" ("userId")
VALUES
  (1), (2);

INSERT INTO "Category" ("name")
VALUES ('Engines'), ('Electrical System'), ('Wheels and Tires'), ('Filters'), ('Radiator'), ('Air Bags'), ('Brake Components'), ('Belts and Hoses'), ('Electrical Components'), ('Suspension');
INSERT INTO "Product" ("categoryId", "name", "description", "brand", "image", "price", "stock", "unitSold", "discount")
VALUES

  (1, 'motor 0', 'Velit sit ad amet consectetur eiusmod eiusmod cupidatat consequat elit mollit.', 'Jimbies', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 749, 0, 50, 0),
  (1, 'motor 1', 'Anim dolore dolore Lorem reprehenderit amet.', 'Jimbies', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 806, 16, 31, 0),
  (1, 'motor 2', 'Do laboris exercitation dolore exercitation esse.', 'Jimbies', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 478, 1, 48, 0),
  (1, 'motor 3', 'Cillum ut duis excepteur ullamco velit exercitation ut exercitation nulla magna nisi labore.', 'Comstar', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 461, 19, 12, 0),
  (1, 'motor 4', 'Anim laborum do id pariatur sunt aliqua deserunt et non.', 'Comstar', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 900, 32, 42, 0),
  (1, 'motor 5', 'Nostrud in labore culpa elit culpa consequat amet eu nisi Lorem nostrud enim velit eu.', 'Comstar', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 500, 25, 35, 0),
  (1, 'motor 6', 'Commodo minim in cillum consequat ipsum irure incididunt ad amet non laboris id labore officia.', 'Comstar', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 200, 12, 15, 0),
  (1, 'motor 7', 'Fugiat amet excepteur irure aliquip duis et officia commodo.', 'Comstar', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 600, 35, 10, 0),
  (1, 'motor 8', 'Laboris deserunt non eu commodo ipsum elit irure dolor non esse consequat eiusmod veniam nisi.', 'Comstar', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 0.65, 29, 30, 0),
  (1, 'motor 9', 'Cupidatat reprehenderit dolore ut culpa adipisicing in eiusmod do non dolore.', 'Rameon', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 500, 39, 38, 0),
  (1, 'motor 10', 'Velit sunt minim aliqua Lorem nostrud Lorem sit aute et aute ad est veniam sit.', 'Rameon', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 600, 10, 16, 0),
  (1, 'motor 11', 'Incididunt cupidatat cillum ex cupidatat nisi incididunt nisi commodo adipisicing laboris anim labore.', 'Rameon', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 5.25, 36, 27, 0),
  (1, 'motor 12', 'Exercitation culpa in ullamco commodo aliquip proident adipisicing labore anim.', 'Rameon', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 600, 6, 22, 0),
  (1, 'motor 13', 'Consectetur officia excepteur magna aliqua officia id tempor.', 'Rameon', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 5.59, 30, 19, 0),
  (1, 'motor 14', 'Do ea consectetur laborum sint.', 'Eplosion', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 9.93, 6, 7, 0),
  (1, 'motor 15', 'Laborum cillum pariatur anim exercitation sint cillum.', 'Eplosion', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 7.89, 6, 38, 0),
  (1, 'motor 16', 'Et veniam duis ea eiusmod voluptate do enim id ex in esse.', 'Eplosion', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 2.97, 14, 13, 0),
  (1, 'motor 17', 'Sit minim minim velit velit labore elit eiusmod ea minim esse aliquip.', 'Eplosion', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 1.38, 1, 40, 0),
  (1, 'motor 18', 'Laboris eiusmod fugiat duis ea reprehenderit ex ex aliquip exercitation cillum do.', 'Eplosion', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 9.05, 32, 14, 0),
  (1, 'motor 19', 'Laboris occaecat ea esse aliquip consequat quis est veniam veniam laborum amet ullamco velit.', 'Eplosion', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 8.53, 32, 47, 0),
  (1, 'motor 20', 'Adipisicing officia aute labore fugiat amet cillum proident.', 'Volax', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 0.02, 37, 41, 0),
  (1, 'motor 21', 'Deserunt laborum non eiusmod laboris laborum consequat excepteur consequat dolore eiusmod nulla deserunt.', 'Volax', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 3.16, 29, 3, 0),
  (1, 'motor 22', 'Lorem pariatur veniam ad est amet do quis excepteur veniam dolor id fugiat.', 'NewVolaxcube', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 9.94, 1, 3, 0),
  (1, 'motor 23', 'Adipisicing ut excepteur esse deserunt voluptate cillum.', 'Volax', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 6.97, 14, 27, 0),
  (1, 'motor 24', 'Laboris excepteur occaecat consectetur excepteur laboris consectetur.', 'Volax', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 3.47, 8, 23, 0),
  (1, 'motor 25', 'Non non qui id eiusmod amet cupidatat culpa labore non cillum duis minim id aliqua.', 'Corpulse', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 6.09, 35, 19, 0),
  (1, 'motor 26', 'Nisi tempor Lorem est sit velit non deserunt ullamco anim sunt.', 'Corpulse', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 5.73, 28, 11, 0),
  (1, 'motor 27', 'Reprehenderit proident reprehenderit proident in.', 'Corpulse', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 3.08, 31, 22, 0),
  (1, 'motor 28', 'Dolore quis occaecat sit reprehenderit culpa.', 'Vixo', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 8.59, 4, 42, 0),
  (1, 'motor 29', 'Consequat fugiat voluptate elit magna nulla eiusmod aliqua ex dolor.', 'Vixo', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 1.13, 0, 31, 0),
  (1, 'motor 30', 'Cillum sunt commodo mollit consequat excepteur veniam ad in ullamco ad veniam quis.', 'Vixo', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 1.97, 29, 45, 0),
  (1, 'motor 31', 'Minim aliquip magna aliquip officia enim est.', 'Vixo', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 4.93, 38, 45, 0),
  (1, 'motor 32', 'Ea nulla proident ipsum officia.', 'Vixo', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 4.88, 38, 16, 0),
  (1, 'motor 33', 'Amet ullamco ex ad in voluptate veniam aliquip id laboris.', 'Vixo', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 8.81, 36, 1, 0),
  --discount
  (1, 'motor 34', 'Eiusmod aute cupidatat esse officia magna.', 'Volax', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 900, 34, 28, 22),
  (1, 'motor 35', 'Dolore laborum laborum laborum laborum.', 'Volax', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 500, 28, 28, 17),
  (1, 'motor 36', 'Dolore laborum laborum laborum laborum.', 'Volax', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 300, 14, 28, 12),
  (1, 'motor 37', 'Dolore laborum laborum laborum laborum.', 'Volax', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 400, 2, 28, 2),
  (1, 'motor 38', 'Dolore laborum laborum laborum laborum.', 'Volax', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 400, 5, 28, 1),
  (1, 'motor 39', 'Dolore laborum laborum laborum laborum.', 'Volax', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 300, 22, 28, 5),
  (1, 'motor 40', 'Dolore laborum laborum laborum laborum.', 'Volax', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 500, 12, 28, 10),
  (1, 'motor 41', 'Dolore laborum laborum laborum laborum.', 'Volax', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 340, 51, 28, 15),
  (1, 'motor 42', 'Dolore laborum laborum laborum laborum.', 'Volax', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 550, 2, 28, 20),
  (1, 'motor 43', 'Incididunt consectetur consectetur dolor tempor aliquip do ea ea proident.', 'Volax', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 229.41, 2, 19, 22),
  (1, 'motor 44', 'Quis aute mollit tempor in irure amet commodo.', 'Volax', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 658.71, 26, 34, 8),
  (1, 'motor 45', 'Id qui aliqua consequat voluptate proident et sit ullamco reprehenderit veniam.', 'Vixo', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 270.94, 34, 23, 14),
  (1, 'motor 46', 'Cupidatat ad cupidatat velit excepteur voluptate officia occaecat do.', 'Vixo', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 488.07, 34, 23, 11),
  (1, 'motor 47', 'Consequat culpa irure occaecat Lorem reprehenderit ad labore excepteur duis sit pariatur laboris.', 'Vixo', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 520.17, 8, 21, 9),
  (1, 'motor 48', 'Labore adipisicing enim laboris consectetur.', 'Vixo', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 440.68, 9, 32, 6),
  (1, 'motor 49', 'Cillum do reprehenderit esse amet nostrud aliqua esse occaecat.', 'Vixo', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 490.32, 33, 10, 17),
  (1, 'motor 50', 'Nisi pariatur consectetur minim cillum sunt sunt.', 'Vixo', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 411.31, 18, 42, 17),
  (1, 'motor 51', 'Eu do ad non culpa in commodo excepteur.', 'Vixo', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 335.48, 24, 30, 7),
  (1, 'motor 52', 'Elit voluptate do id id eiusmod.', 'Insuron', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 593.13, 33, 48, 21),
  (1, 'motor 53', 'Occaecat labore tempor velit fugiat nostrud esse sunt reprehenderit.', 'Insuron', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 623.98, 27, 4, 17),
  (1, 'motor 54', 'Exercitation ullamco quis ut irure elit quis cupidatat id pariatur adipisicing et ullamco deserunt excepteur.', 'Insuron', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 471.14, 11, 50, 8),
  (1, 'motor 55', 'Nulla ea excepteur incididunt esse est aliqua in.', 'Insuron', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 617.31, 9, 7, 14),
  (1, 'motor 56', 'Sit ipsum nulla ipsum mollit sint.', 'Insuron', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 269.52, 22, 30, 12),
  --wheels
  (2, 'wheel 0', 'Velit sit ad amet consectetur eiusmod eiusmod cupidatat consequat elit mollit.', 'Jimbies', 'https://res.cloudinary.com/dmtslv7ui/image/upload/v1700611985/secondrive/xlfz5viwvaufp6gj27lx.png', 350, 23, 0, 0);
