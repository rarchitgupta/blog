import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Field = ({ label, children }) => {
  return (
    <label>
      <span className="text-sm text-slate-500">{label}</span>
      {children}
    </label>
  );
};

const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}) => {
  return (
    <Field label={label}>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-none border-b border-slate-200 py-3 pl-3 pr-7 text-slate-800 placeholder-slate-400"
      />
    </Field>
  );
};

const TextareaField = ({ label, name, placeholder, required = true }) => {
  return (
    <Field label={label}>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        className="h-40 w-full rounded-none border-b border-slate-200 py-3 pl-3 pr-7 text-slate-800 placeholder-slate-400"
      />
    </Field>
  );
};

const ContactForm = () => {
  return (
    <Bounded as="section" size="small">
      <div>
        <Heading>
          <p className="font-sans">Get in touch</p>
        </Heading>
        <p className="my-4 font-sans">
          You can reach me at{" "}
          <span className="font-semibold text-[#38B2AC]">
            rarchitgupta@gmail.com
          </span>
        </p>
        <p className="my-4 font-sans">Or</p>
        <p className="my-4 font-sans">Contact me through</p>
        <div className="my-8 flex gap-4">
          <a href="https://github.com/rarchitgupta">
            <FaGithub size={30} color="#38B2AC" />
          </a>
          <a href="https://linkedin.com/in/rarchit-gupta">
            <FaLinkedin size={30} color="#38B2AC" />
          </a>
          <a href="https://twitter.com/rchitgupta">
            <FaTwitter size={30} color="#38B2AC" />
          </a>
        </div>
      </div>
    </Bounded>
  );
};

export default ContactForm;
