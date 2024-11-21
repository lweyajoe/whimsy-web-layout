import AdminLayout from "@/components/layouts/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const AddProduct = () => {
  return (
    <AdminLayout>
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-serif text-brown">Add New Product</h1>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input id="name" placeholder="Enter product name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input id="price" type="number" placeholder="0.00" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter product description" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Product Image</Label>
            <Input id="image" type="file" accept="image/*" />
          </div>

          <Button type="submit" className="w-full">Add Product</Button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddProduct;