import { createClient } from "@supabase/supabase-js";

const anonkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmYnZndnBkdmlhanN4dG1oaWpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwODk5MjYsImV4cCI6MjA3NTY2NTkyNn0.DiLdVfXe5Ddam3sYMxyJ2dOwSp7E6PBq3xv76xEsMeY"
const supabaseUrl = "https://sfbvgvpdviajsxtmhijf.supabase.co"

const supabase = createClient(supabaseUrl, anonkey);

/*
supabase.storage.from("images").upload(file.name, file, {
      upsert : false,
      cacheControl : '3600'
    }).then(
      ()=>{
        const publicUrl = supabase.storage.from("images").getPublicUrl(file.name).data.publicUrl;
        console.log(publicUrl);
      }
    )
*/

export default function mediaUpload(file) {
    return new Promise(
        (resolve, reject) => {
            if (file == null) {
                reject("No file selected");
            } else {
                supabase.storage
                    .from("images")
                    .upload(file.name, file, {
                        upsert: false,
                        cacheControl: '3600'
                    }).then(
                        () => {
                            const publicUrl = supabase.storage
                                .from("images")
                                .getPublicUrl(file.name).data.publicUrl;
                            resolve(publicUrl);
                        }).catch(
                            () => {
                                reject("An Error Occured")
                            }
                        );
            }
        });
}
