import AdminLayout from "@/components/layouts/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const AddHolidayPackage = () => {
  return (
    <AdminLayout>
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-serif text-brown">Add Holiday Package</h1>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Package Name</Label>
            <Input id="name" placeholder="Enter package name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input id="price" type="number" placeholder="0.00" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Duration</Label>
            <Input id="duration" placeholder="e.g., 7 days" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter package description" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="images">Package Images</Label>
            <Input id="images" type="file" accept="image/*" multiple />
          </div>

          <Button type="submit" className="w-full">Create Package</Button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddHolidayPackage;