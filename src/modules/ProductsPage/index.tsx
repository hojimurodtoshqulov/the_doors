import React from "react";
import AboutShowcase from "@/components/sections/MainShowcase";
import Adds from "@/components/Adds";
 import ProductSection from "@/components/sections/ProductSection";
 
function ProjectsPage() {
 
	return (
		<div style={{paddingTop:200}}>
 			<ProductSection  isLink={true}/>
			<Adds />
		</div>
	);
}

export default ProjectsPage;
