import Note from "../models/Note.js"

export async function getAllNotes(req,res){
    try{
        const notes = await Note.find().sort({createdAt: -1}) //tp sort, you can do .sort({createdAt: -1 })
        res.status(200).json(notes)
    }
    catch(error){
        console.log(error.message);
        res.status(200).json({message: "Internal server error"})
    }
};

export async function createNote(req, res){
    try{
        const {title, content} = req.body;
        const newNote = new Note({title, content});
        await newNote.save();
        
        res.status(201).json(newNote);

    }catch(error){
        console.log(error.message)
        res.status(500).json({message:"Whaat, it couldnt be created!"})
    }
}

export async function  getNoteByID(req,res){
    try{
        const note = await Note.findById(req.params.id);
        if(!note) res.status(404).json({message: `Could not find the note with the id ${req.params.id}`})

        res.status(200).json(note)
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: "Internal Server Error"})
    }
}

export async function updateNote(req,res){
    try{
        const {title, content} = req.body;

        const updatedNote =  await Note.findByIdAndUpdate(req.params.id, {title, content}, {new:true});

        if (!updatedNote) res.status(404).json({message: `Could not find the note with the id ${req.params.id}`})
        
            res.status(200).json({message: "Updated Successfully!",
            updatedNote});
        
    }

    catch(error){
        console.log(error.message)
        res.status(500).json({message: "Internal Server error!"})
    }
}

export const deleteNote= async (req,res)=>{
        try{

        const deletedNote =  await Note.findByIdAndDelete(req.params.id);

        if (!deletedNote) req.status(404).json({message: `Could not find the note with the id ${req.params.id}`})
        
            res.status(200).json({message: "Deleted Successfully!",
            deletedNote});
    }

    catch(error){
        console.log(error.message)
        res.status(500).json({message: "Internal Server error!"})
    }
}