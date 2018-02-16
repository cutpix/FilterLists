import * as React from "react";

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    render() {
        return <div className="container">
                   <div className="row">
                       <h1>
                           <img src="logo_filterlists.png" alt="FilterLists" style={{
                               width: "40%",
                               display: "block",
                               height: "auto"
                           }}/>
                       </h1>
                       <p style={{ margin: 10 }}>
                           The independent and comprehensive directory of all public filter and hosts lists for advertisements, trackers, malware, and annoyances.
                       </p>
                   </div>
                   <div className="row">
                       <div>
                           { this.props.children }
                       </div>
                   </div>
                   <div className="row text-center" style={{ margin: 10 }}>
                       A project by <a href="https://collinmbarrett.com/">Collin M. Barrett</a>. | Contribute on <a href="https://github.com/collinbarrett/FilterLists">GitHub</a>.
                   </div>
               </div>;
    };
}