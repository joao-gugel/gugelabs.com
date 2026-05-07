"use server"

interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function submitContactForm(data: ContactFormData) {
  // Simula um delay de 1 segundo
  await new Promise((resolve) => setTimeout(resolve, 1000))
  
  // Loga o body da request
  console.log("[GUGELABS] Contact form submission:", {
    timestamp: new Date().toISOString(),
    name: data.name,
    email: data.email,
    message: data.message,
  })
  
  return { success: true }
}
