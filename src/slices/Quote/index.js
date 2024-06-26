import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";

const Quote = ({ slice }) => {
  return (
    <Bounded as="section" size="wide">
      {prismic.isFilled.richText(slice.primary.quote) && (
        <div className="font-sans text-3xl italic leading-relaxed">
          &ldquo;
          <PrismicText field={slice.primary.quote} />
          &rdquo;
          {prismic.isFilled.keyText(slice.primary.source) && (
            <> &mdash; {slice.primary.source}</>
          )}
        </div>
      )}
    </Bounded>
  );
};

export default Quote;
