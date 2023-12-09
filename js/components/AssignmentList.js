import Assignment from "./Assignment.js";
export default {
	components: {
		Assignment
	},

	template: `
        <section v-show="assignments.length" >
            <h2 class="font-bold mb-2">
            {{ title }} 
            <span>({{ assignments.length }})</span>
            </h2>

            <div class="flex gap-2">
            <button @click="currentTag=tag" v-for="tag in tags" class="border rounded px-1 py-px text-xs">{{ tag }}</button>
            </div>

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
        },
		tags() {
			return ['All',...new Set(this.assignments.map(a => a.tag))];
		}
	}
};