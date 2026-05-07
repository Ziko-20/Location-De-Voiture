export default function Skeleton({ className = '' }) {
  return (
    <div
      className={`shimmer rounded-xl ${className}`}
    />
  );
}

export function CarCardSkeleton() {
  return (
    <div className="bg-white dark:bg-dark-700 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-dark-600">
      <Skeleton className="h-52 w-full rounded-none" />
      <div className="p-5 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
        <div className="flex justify-between items-center pt-3">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-10 w-28" />
        </div>
      </div>
    </div>
  );
}
