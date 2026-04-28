import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// YOUR SUPABASE INFO
const supabaseUrl = "https://abepihyrjhlnvjtxsmse.supabase.co";
const supabaseKey = "sb_publishable_iOUhHiYChgpK_7grYsSwHA_Fx7cuL1u";

const supabase = createClient(supabaseUrl, supabaseKey);

// Form handler
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = DOMPurify.sanitize(document.getElementById("name").value);
  const email = DOMPurify.sanitize(document.getElementById("email").value);
  const message = DOMPurify.sanitize(document.getElementById("message").value);

  const { error } = await supabase
    .from("messages")
    .insert([{ name, email, message }]);

  if (error) {
    console.error(error);
    alert("Error sending message.");
  } else {
    alert("Message sent!");
    document.getElementById("contactForm").reset();
  }
});
