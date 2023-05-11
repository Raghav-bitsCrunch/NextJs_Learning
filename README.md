npx create-next-app hello-world

Give Yes for eslint

Then
cd hello-world

To RUN app --> npm run dev

1.commit Routing 
http://localhost:3000/ -- Try this first

2.commit Routing - Creating two more routes
http://localhost:3000/about
http://localhost:3000/profile

3.commit Nested routes 
http://localhost:3000/blog
http://localhost:3000/blog/first
http://localhost:3000/blog/second


4.Dynamic Routes
http://localhost:3000/products

here for limited products we can create pages.

if we have more products we can't able to create each and every pages
for that we are going for dynamic routes.

Here [productid].js file will be created for dynamic routes.
Now the URL will be

http://localhost:3000/products/1
http://localhost:3000/products/2
.
.
.
Till infinite

use useRouter lib to query the productid in URL

http://localhost:3000/products/1
