interface StatusCircleProps {
  size?: 'sm' | 'md' | 'lg';
  status?: 'success' | 'warn' | 'danger';
}
export const StatusCircle = ({ size, status }: StatusCircleProps) => {
  let sizeClass = 'h-3 w-3';
  if (size === 'sm') {
    sizeClass = 'h-1.5 w-1.5';
  } else if (size === 'lg') {
    sizeClass = 'h-6 w-6';
  }

  let [syncStatusColor, syncStatusBg] = ['bg-emerald-500', 'bg-emerald-500/20'];
  if (status === 'warn') {
    [syncStatusColor, syncStatusBg] = ['bg-yellow-500', 'bg-yellow-500/20'];
  } else if (status === 'danger') {
    [syncStatusColor, syncStatusBg] = ['bg-red-500', 'bg-red-500/20'];
  }

  return (
    <div className={`ml-4 flex-none rounded-full p-1 ${syncStatusBg}`}>
      <div className={`${sizeClass} rounded-full ${syncStatusColor}`}></div>
    </div>
  );
};
