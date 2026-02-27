"use client";

import { FocusInput, FocusTextArea } from "@/components/ui/focus-input";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { joinWaitlist } from "@/actions/actions";
import { useTransition } from "react";

export const Form = () => {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      const result = await joinWaitlist(formData);

      if (result.success) {
        toast.success(result.success);
        (event.target as HTMLFormElement).reset();
        if ((result as any).emailError) {
          console.error("Welcome email error:", (result as any).emailError);
          toast.error("Joined but welcome email failed. Check console.");
        }
      } else if (result.error) {
        toast.error(result.error);
      }
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <div
        id="waitlist"
        className="sm:bg-contain bg-cover bg-center mt-10 h-auto sm:py-16 py-30 px-4 sm:px-6 md:px-10"
        style={{ backgroundImage: `url("/assets/paper-texture.svg")` }}
      >
        <div className="px-2 sm:px-6 md:px-10 flex items-center flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col items-center"
          >
            <h1 className="text-center text-green-700 text-2xl font-bold tracking-wide">
              Join the Waitlist
            </h1>

            <p className="text-[#787878] capitalize text-sm mt-2 w-full sm:w-[90%] md:w-[80%] text-center mx-auto">
              Be part of the first 1,000 students to experience Shopa
            </p>

            <form
              onSubmit={handleSubmit}
              className="w-full sm:w-[450px] md:w-[500px] flex flex-col items-center justify-center mt-6 p-8 rounded-2xl bg-white/30 backdrop-blur-md border border-white/20 shadow-xl"
            >
              <FocusInput name="name" type="text" placeholder="Name" required />
              <FocusInput
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />
              <FocusInput
                name="university"
                type="text"
                placeholder="Enter your University"
                required
              />
              <FocusTextArea
                name="message"
                placeholder="Additional Message"
                className="h-32 sm:h-36 resize-none"
              />

              <MagneticButton
                type="submit"
                disabled={isPending}
                className="tracking-[-0.04em] text-[14px] font-medium bg-amber-300 px-6 w-full h-[50px] mt-4 rounded-lg disabled:opacity-50 inline-flex items-center justify-center"
              >
                {isPending ? "Joining..." : "Join The Waitlist"}
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
