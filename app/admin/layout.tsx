const AdminLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <main className="relative min-h-screen scroll-smooth bg-stone-100">{children}</main>
   );
};

export default AdminLayout;
