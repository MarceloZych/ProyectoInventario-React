import { createContext, useContext, useEffect, useState } from "react";
import { supabaseUrl } from "../supabase/supabase.config";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  //const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const {data:authListener} = supabaseUrl.auth.
        onAuthStateChange(
            (event, session) => {
            async (event, session) => {
                console.log(event, session);
                
                setUser(session?.user ?? null);
                setSession(session);
            }
            }
        )
        return () => {
            authListener.subscription.unsubscribe();
        };
  }, []);

  return (
    <AuthContext.Provider value={{ /*session,*/ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
