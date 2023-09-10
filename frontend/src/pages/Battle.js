import CardLayout from '../components/Battle/CardLayout';

export default function Battle() {
    return (
        <div className="w-100 min-h-screen flex flex-row justify-between items-center py-20 battle_background">
            <h1 className="text-7xl text-white absolute inset-x-0 top-4 text-center">The Arena</h1>
            <CardLayout />
        </div>
    )
}