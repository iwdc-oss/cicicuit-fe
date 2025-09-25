import { getToken } from '@/utils/api';
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const token = getToken();
    if(!token) return <Navigate to='/login' replace />;
    return <Outlet />;
};

export default ProtectedRoute;