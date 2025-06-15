
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto p-6">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">页面未找到</h2>
        <p className="text-muted-foreground mb-6">
          抱歉，您访问的页面不存在或已被移动。
        </p>
        <div className="space-y-4">
          <Link 
            to="/" 
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            返回首页
          </Link>
          <p className="text-sm text-muted-foreground">
            路径: {location.pathname}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
