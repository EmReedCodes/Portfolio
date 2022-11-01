import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//wasnt importing icons had to add the resolve
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

})
