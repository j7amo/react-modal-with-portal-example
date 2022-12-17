// this is basically what native React.Fragment does:
// It is used as a wrapper to make React happy when we have multiple adjacent JSX-elements,
// and we don't wanna use a <div> because we want to avoid rendering excessive number of <div>s and possibly
// break some styling (e.g. selectors that depend on elements nesting)
const FragmentImitation = ({ children }) => {
  return children;
};

export default FragmentImitation;
