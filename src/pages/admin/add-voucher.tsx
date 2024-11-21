import AdminLayout from "@/components/layouts/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const AddVoucher = () => {
  return (
    <AdminLayout>
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-serif text-brown">Add New Voucher</h1>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="code">Voucher Code</Label>
            <Input id="code" placeholder="Enter voucher code" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="value">Value</Label>
            <Input id="value" type="number" placeholder="0.00" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="expiry">Expiry Date</Label>
            <Input id="expiry" type="date" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter voucher description" />
          </div>

          <Button type="submit" className="w-full">Create Voucher</Button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddVoucher;