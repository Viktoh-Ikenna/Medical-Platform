import QuoteDetails from "./components/QuoteDetails/QuoteDetails";
import RequestInformation from "./components/RequestInformation/RequestInformation";
import Review from "./components/Review/Review";
import TermsAndAttachments from "./components/TermsAndAttachments/TermsAndAttachments";
import Quotes from "./Quotes";

export const qoutesRoutes = [
     { path: "quotes", element: <QuoteDetails /> },
     {
          path: "quotes/response",
          element: <Quotes />,
          children: [
               { path: "information", element: <RequestInformation /> },
               { path: "terms", element: <TermsAndAttachments /> },
               { path: "review", element: <Review /> },
          ],
     },
];
