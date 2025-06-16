import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import nonmagssandTitaniumMap from "../../assets/images/Nonmagssand_titanium_map.jpg";

const ElementalAnalysis = () => {
  const title = "Elemental Analysis of Volcanic Sand";
  const description = "Comprehensive study of volcanic sand composition using advanced analytical techniques";
  const images = [nonmagssandTitaniumMap];
  
  const content = (
    <div>
      <h2>Project Overview</h2>
      <p>
        This project focused on the detailed elemental analysis of volcanic sand
        samples, with particular emphasis on the distribution and concentration
        of various elements, including titanium. The study utilized advanced
        analytical techniques to map the elemental composition and understand
        the geological processes that led to the current distribution.
      </p>

      <h3>Analysis Methods</h3>
      <ul>
        <li>Energy-dispersive X-ray spectroscopy (EDS)</li>
        <li>Elemental mapping and distribution analysis</li>
        <li>Quantitative composition analysis</li>
        <li>Statistical analysis of element distribution</li>
      </ul>

      <h3>Key Findings</h3>
      <p>
        The analysis revealed several important characteristics of the volcanic sand:
      </p>
      <ul>
        <li>Complex distribution patterns of titanium and other elements</li>
        <li>Correlation between element concentration and grain size</li>
        <li>Evidence of multiple geological processes</li>
        <li>Potential implications for industrial applications</li>
      </ul>

      <h3>Applications</h3>
      <p>
        The findings from this analysis have important implications for:
      </p>
      <ul>
        <li>Understanding geological formation processes</li>
        <li>Industrial material selection</li>
        <li>Environmental impact assessment</li>
        <li>Resource utilization and extraction</li>
      </ul>
    </div>
  );

  return (
    <ProjectTemplate
      title={title}
      description={description}
      images={images}
      content={content}
    />
  );
};

export default ElementalAnalysis; 