
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    // Show a loading indicator while checking authentication
    return (
      <div className="min-h-screen bg-space-blue flex items-center justify-center">
        <div className="animate-pulse text-space-cyan">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  // Render the protected content
  return <Outlet />;
};

export default ProtectedRoute;
