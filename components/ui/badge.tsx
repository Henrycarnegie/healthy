interface BadgeProps {
   icon?: React.ReactNode;
   label: React.ReactNode;
}

const Badge = ({ icon, label }: BadgeProps) => {
   return (
      <div className="px-4 py-2 mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-700 text-emerald-700 text-sm ">
         {icon && <span className="flex items-center">{icon}</span>}
         <p>{label}</p>
      </div>
   );
};

export default Badge;
