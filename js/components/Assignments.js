
import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components:{
    AssignmentList,
    AssignmentCreate,
  },

  template:`
    <section class="space-y-6">
      <assignment-list :assignments="filter.inProgress" title="In Progress"></assignment-list>
      <assignment-list :assignments="filter.completed" title="Completed"></assignment-list>

      <assignment-create @add="add"></assignment-create>
    </section>

  `,
  data(){
    return{
      assignments:[
        {name: 'Finish project', complete: false, id: 1},
        {name: 'Read chapter 4', complete: false, id: 2},
        {name: 'Turn in homework', complete: false, id: 3}
      ],
    };
  },

  computed:{
    /* inProgress(){return this.assignments.filter(assignment=>!assignment.complete)},
    completed(){return this.assignments.filter(assignment=>assignment.complete)}, */
    filter(){
      return{
        inProgress: this.assignments.filter(assignment=>!assignment.complete),
        completed: this.assignments.filter(assignment=>assignment.complete)
      };
    }    
  },

  methods: {
    add(name){
      this.assignments.push({
        name: name,
        completed: false,
        id: this.assignments.length+1
      });
    }
  },
  
};