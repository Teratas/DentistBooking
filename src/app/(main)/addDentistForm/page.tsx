import AddDentistForm from "@/components/AddDentistForm";
export default function AddDentistPage() {
    return (
        <main className='text-black relative'>
            <div className='absolute w-[100vw] h-[100vh] bg-gradient-to-r from-cyan-200 to-stone-200'></div>
            <div className=' absolute'>
                <AddDentistForm />
            </div>
        </main>
    );
}