import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotesService } from '../../shared/services/notes.service';
import { Note } from '../../shared/interfaces/user-notes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
 itemID:any;
  allUsernotes!: any;
  private readonly _NotesService = inject(NotesService)
  formNotes:FormGroup = new FormGroup({
  title: new FormControl(null , [Validators.required]),
  content: new FormControl(null , [Validators.required]),

})

updateFormNotes:FormGroup = new FormGroup({
  title: new FormControl(null , [Validators.required]),
  content: new FormControl(null , [Validators.required]),

})
allUserNotes=()=>{
  this._NotesService.getUserNotesApi().subscribe({
    next:(res)=>{
      console.log(res.notes);
      this.allUsernotes = res.notes;
    }
    
    ,error:(err)=>{console.log(err);},
  })
}

// allNotes=()=>{
//   this._NotesService.getNotesApi().subscribe({
//     next:(res)=>{console.log(res.notes);},error:(err)=>{console.log(err);},
//   })
// }


addNote = ():void =>{
  this._NotesService.addNoteAPI(this.formNotes.value).subscribe({
    next:(res)=>{
      console.log(res); 
      this.allUserNotes()
      // this.allNotes()
    }
    , 
    error:(err)=>{
      console.log(err); 

    }
  })
}
delteNote=(id:string):void=>{
  this._NotesService.deletenote(id).subscribe({
    next:(res)=>{
      console.log(res)
      this.allUserNotes()
    }, 
    error:(err)=>{
      console.log(err)
    }
  })
}
pathchForm=(note:any , id:string):void=>{
  this.itemID= id
  this.updateFormNotes.patchValue(note)

}
UpdagteNote= (id:string):void =>{
  this._NotesService.updateNote(id , this.updateFormNotes.value).subscribe({
    next:(res)=>{
      console.log(res)
      this.allUserNotes()

    },
    error:(err)=>{
      console.log(err)
    }
  })
}

ngOnInit(): void {
  this.allUserNotes()
}


}
