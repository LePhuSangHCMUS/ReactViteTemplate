import { useState, useEffect } from 'react';
//*Hook
export function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => {
            setMatches(media.matches);
        };
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
}
//*Use
// function Page() {
//     let isPageWide = useMediaQuery('(min-width: 800px)')

//       return <>
//       {isPageWide && <UnnecessarySidebar />}
//       <ImportantContent />
//     </>
//   }