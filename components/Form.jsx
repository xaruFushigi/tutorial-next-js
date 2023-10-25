import Link from "next/link";

const Form = (props) => {
  return (
    <div>
      <section className="w-full max-w-full flex-start flex-col">
        <h1 className="head_text text-left">
          <span className="blue_gradient">{props.type}</span> Post
        </h1>

        <p className="desc text-left max-w-md">
          {props.type} and share amazing prompts with the world, and let your
          imagination run wild with any AI-powered platform
        </p>

        <form
          onSubmit={props.handleSubmit}
          className="mt-10 w-full max-w-2x1 flex flex-col gap-7 glassmorphism"
        >
          <label>
            <span className="font-satoshi text-base text-grey-700">
              Your AI Prompt
            </span>
          </label>

          <textarea
            value={props.post.prompt}
            onChange={(e) =>
              props.setPost({ ...props.post, prompt: e.target.value })
            }
            placeholder="write your prompt here..."
            required
            className="form_textarea"
          />
          <label>
            <span className="font-satoshi text-base text-grey-700">
              Prompt Field/Tag{" "}
              <span className="font-normal">
                (#product, #webdevelopement, #idea)
              </span>
            </span>
          </label>
          <textarea
            value={props.post.tag}
            onChange={(e) =>
              props.setPost({ ...props.post, tag: e.target.value })
            }
            placeholder="write your tag here..."
            required
            className="form_input"
          />
          <div className="flex-end mx-3 mb-5 gap-4">
            <Link href="/" className=" text-black-500 text-sm">
              Cancel
            </Link>

            <button
              type="submit"
              disabled={props.submitting}
              className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            >
              {props.submitting ? `${props.type}...` : props.type}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Form;
