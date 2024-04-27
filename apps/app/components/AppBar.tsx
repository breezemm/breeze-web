// import { auth, signIn, signOut } from "@/auth";

// import React from "react";

// async function AppBar() {
//   const session = await auth();
//   return (
//     <div className="p-2 bg-neutral-7 flex gap-2">
//       <div className="ml-auto">
//         {session && session.user ? (
//           <div>
//             <p>{session.user.name}</p>
//             <form
//               action={async () => {
//                 "use server";
//                 await signOut();
//               }}>
//               <button type="submit">Sign Out</button>
//             </form>
//           </div>
//         ) : (
//           <form
//             action={async () => {
//               "use server";
//               await signIn();
//             }}>
//             <button type="submit">Sign In</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AppBar;
