import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Mail } from "lucide-react";
import Footer from "@/components/Footer";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/9448994/9448994-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-brown/40"></div>
      </div>

      {/* Auth Content */}
      <div className="relative flex-grow flex items-center justify-center p-4">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="bg-cream/95 p-8 rounded-lg shadow-xl">
            <div className="text-center mb-8">
              <img
                src="https://github.com/lweyajoe/whimsy-web-layout/blob/main/public/lath.PNG?raw=true"
                alt="LATH Logo"
                className="w-20 h-20 mx-auto mb-4 rounded-full"
              />
              <h2 className="text-2xl font-serif text-brown">
                {showForgotPassword
                  ? "Reset Password"
                  : isSignIn
                  ? "Welcome Back"
                  : "Create Account"}
              </h2>
            </div>

            {showForgotPassword ? (
              <form className="space-y-4">
                <Input type="email" placeholder="Email" />
                <Button className="w-full bg-brown text-cream hover:bg-brown-light">
                  Send Reset Link
                </Button>
                <button
                  type="button"
                  className="text-sm text-brown hover:underline"
                  onClick={() => setShowForgotPassword(false)}
                >
                  Back to Sign In
                </button>
              </form>
            ) : (
              <form className="space-y-4">
                {!isSignIn && <Input type="text" placeholder="Full Name" />}
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                {isSignIn && (
                  <button
                    type="button"
                    className="text-sm text-brown hover:underline"
                    onClick={() => setShowForgotPassword(true)}
                  >
                    Forgot Password?
                  </button>
                )}
                <Button className="w-full bg-brown text-cream hover:bg-brown-light">
                  {isSignIn ? "Sign In" : "Sign Up"}
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-brown/20"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-cream text-brown/60">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Facebook className="mr-2 h-4 w-4" />
                    Facebook
                  </Button>
                </div>

                <button
                  type="button"
                  className="text-sm text-brown hover:underline"
                  onClick={() => setIsSignIn(!isSignIn)}
                >
                  {isSignIn
                    ? "Don't have an account? Sign Up"
                    : "Already have an account? Sign In"}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Auth;