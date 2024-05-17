import { RichText } from "prismic-reactjs";
import { Bounded } from "@/components/Bounded";
import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
import python from "highlight.js/lib/languages/python";
import go from "highlight.js/lib/languages/go";
import "highlight.js/styles/default.css";

/**
 * @typedef {import("@prismicio/client").Content.CodeSlice} CodeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CodeSlice>} CodeProps
 * @param {CodeProps}
 */
const Code = ({ slice }) => {
  const rawMarkdown = RichText.asText(slice.primary.code);
  const language = slice.variation === "default" ? "python" : slice.variation;
  hljs.registerLanguage("python", python);
  hljs.registerLanguage("typescript", typescript);
  hljs.registerLanguage("go", go);
  const highlightedCode = hljs.highlight(rawMarkdown, { language: language });
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Bounded>
        <pre className={language}>
          <code dangerouslySetInnerHTML={{ __html: highlightedCode.value }} />
        </pre>
      </Bounded>
    </section>
  );
};

export default Code;
