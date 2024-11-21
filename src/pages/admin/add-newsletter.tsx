import AdminLayout from "@/components/layouts/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const AddNewsletter = () => {
  return (
    <AdminLayout>
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-serif text-brown">Add New Newsletter</h1>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Newsletter Title</Label>
            <Input id="title" placeholder="Enter newsletter title" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea id="content" placeholder="Enter newsletter content" className="min-h-[200px]" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cover">Cover Image</Label>
            <Input id="cover" type="file" accept="image/*" />
          </div>

          <Button type="submit" className="w-full">Publish Newsletter</Button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddNewsletter;