export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex items-center justify-center">
      <div className="relative">
        <div className="h-12 w-12 rounded-full border-t-4 border-b-4 border-blue-600 animate-spin"></div>
        <div className="mt-4 text-center text-gray-600">Loading...</div>
      </div>
    </div>
  );
}
