
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // For now, we'll use localStorage. Later, suggest Supabase or EmailJS.
    try {
      const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      localStorage.setItem('contactMessages', JSON.stringify([...existingMessages, formData]));
      
      toast({
        title: "Message Sent! 🚀",
        description: "Thanks for reaching out! I'll get back to you soon.",
        variant: "default", // Or a custom success variant
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 10 } },
  };

  const contactInfo = [
    { icon: <Mail className="text-neon-blue" />, text: "sanjaysaini4423@gmail.com", href: "mailto:your.email@example.com" },
    { icon: <Phone className="text-neon-pink" />, text: "+91 861901652", href: "tel:+15551234567" },
    { icon: <MapPin className="text-light-purple" />, text: "Jaipur,Rajasthan,India", href: "#" },
  ];

  return (
    <motion.section
      id="contact"
      className="section-padding bg-space-black/70 backdrop-blur-sm"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center holographic-text"
          variants={itemVariants}
        >
          Let's Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div className="space-y-8" variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-foreground">Get in Touch</h3>
            <p className="text-muted-foreground leading-relaxed">
              Have a project in mind, a question, or just want to say hi? Feel free to reach out. I'm always excited to discuss new ideas and collaborations.
            </p>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a 
                  key={index} 
                  href={info.href}
                  className="flex items-center space-x-3 p-3 glassmorphism rounded-lg group hover:shadow-neon-glow-blue transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <span className="transform group-hover:scale-110 transition-transform duration-300">{info.icon}</span>
                  <span className="text-foreground group-hover:text-neon-blue transition-colors duration-300">{info.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 p-6 md:p-8 glassmorphism rounded-xl"
            variants={itemVariants}
          >
            <div>
              <Label htmlFor="name" className="text-neon-blue text-sm font-semibold block mb-2">Full Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-input/50 border-glass-edge focus:border-neon-blue focus:ring-neon-blue placeholder:text-muted-foreground/50"
                placeholder="e.g., Ada Lovelace"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-neon-pink text-sm font-semibold block mb-2">Email Address</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-input/50 border-glass-edge focus:border-neon-pink focus:ring-neon-pink placeholder:text-muted-foreground/50"
                placeholder="you@gmail.com"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-light-purple text-sm font-semibold block mb-2">Your Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-input/50 border-glass-edge focus:border-light-purple focus:ring-light-purple placeholder:text-muted-foreground/50"
                placeholder="Tell me about your project or idea..."
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-neon-blue via-neon-pink to-light-purple text-space-black font-semibold hover:opacity-90 transition-opacity duration-300 transform hover:scale-105"
              size="lg"
            >
              {isSubmitting ? (
                <motion.div 
                  className="flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Send size={20} className="mr-2" />
                </motion.div>
              ) : (
                <>
                  Send Message <Send size={20} className="ml-2" />
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;
  