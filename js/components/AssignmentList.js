import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
export default {
	components: {
		Assignment, AssignmentTags
	},

	template: `
        <section v-show="assignments.length" class="w-60" >
            <h2 class="font-bold mb-2">
            {{ title }} 
            <span>({{ assignments.length }})</span>
            </h2>

			<assignment-tags 
                v-model:currentTag="currentTag" 
				:initial-tags="assignments.map(a => a.tag)" 
			/>

            <ul class="border border-gray-600 divide-y mt-4">
				<assignment 
					v-for="assignment in filterAssignments" 
					:key="assignment.id" 
					:assignment="assignment"
				></assignment>
            </ul>  
        </section>
    `,

	props: {
		assignments: Array,
		title: String
    },

    data() {
        return {
            currentTag: 'All'
        };
    },


    computed: {
        filterAssignments() {
            if (this.currentTag === 'All') {
                return this.assignments;
            }
            return this.assignments.filter(a=> a.tag===this.currentTag);
        }
		
	}
};