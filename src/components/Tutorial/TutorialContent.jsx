import React from 'react'

const TutorialContent = () => {
    return (
        <div className="min-h-screen bg-gray-900 p-8">
            <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] p-8">
                <h1 className="text-4xl font-bold text-center text-white mb-6">Blockchain Technology Tutorial</h1>

                <p className="text-gray-300 text-lg mb-4">
                    Welcome to this introductory guide on blockchain technology! In this tutorial, we'll cover the basics of blockchain, its key concepts, and resources to help you start your blockchain journey.
                </p>

                <section className="my-8">
                    <h2 className="text-2xl font-semibold text-white mb-3">What is Blockchain?</h2>
                    <p className="text-gray-400 mb-4">
                        Blockchain is a distributed ledger technology that allows data to be stored globally on thousands of servers, while letting anyone on the network see everyone else's entries in real-time. This makes it difficult for one user to gain control of the network.
                    </p>
                    <p className="text-gray-400">
                        Blockchain's most well-known application is cryptocurrency (such as Bitcoin), but it has potential applications in a wide range of fields.
                    </p>
                </section>

                <section className="my-8">
                    <h2 className="text-2xl font-semibold text-white mb-3">Key Concepts in Blockchain</h2>
                    <ul className="list-disc list-inside text-gray-400 space-y-2">
                        <li><strong>Decentralization:</strong> No single entity has control over the entire blockchain.</li>
                        <li><strong>Transparency:</strong> All transactions are visible to the network participants.</li>
                        <li><strong>Immutability:</strong> Once data is recorded, it cannot be changed without network consensus.</li>
                        <li><strong>Consensus Mechanisms:</strong> Methods like Proof of Work (PoW) and Proof of Stake (PoS) help secure the network.</li>
                    </ul>
                </section>

                <section className="my-8">
                    <h2 className="text-2xl font-semibold text-white mb-3">Learning Resources</h2>
                    <div className="space-y-4">
                        <a href="https://www.blockchain.com/learning-portal" className="block text-white underline" target="_blank" rel="noopener noreferrer">
                            Blockchain Learning Portal
                        </a>
                        <a href="https://www.edx.org/learn/blockchain" className="block text-white underline" target="_blank" rel="noopener noreferrer">
                            Blockchain Courses on edX
                        </a>
                        <a href="https://www.coursera.org/courses?query=blockchain" className="block text-white underline" target="_blank" rel="noopener noreferrer">
                            Blockchain Courses on Coursera
                        </a>
                    </div>
                </section>

                <section className="my-8">
                    <h2 className="text-2xl font-semibold text-white mb-3">Conclusion</h2>
                    <p className="text-gray-400">
                        Blockchain technology is revolutionizing the way we think about data security, transparency, and trust in digital transactions. Keep exploring and learning to stay updated in this fast-growing field.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default TutorialContent