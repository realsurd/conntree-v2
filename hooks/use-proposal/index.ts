"use client"

import { useState } from "react"

// Types
export interface Proposal {
  id: number
  title: string
  description: string
  status: "active" | "approved" | "denied"
  votingTag: string
  yesPercentage: number
  noPercentage: number
  totalVotes: number
  createdBy: string
  creatorAvatar: string
  endsIn?: string
  timestamp?: string
}

export function useProposals() {
  // Generate a larger array of sample proposals
  const generateProposals = () => {
    const statuses: ("active" | "approved" | "denied")[] = ["active", "approved", "denied"]
    const proposals: Proposal[] = []

    for (let i = 1; i <= 36; i++) {
      const status = statuses[i % 3]
      const yesPercentage =
        status === "approved"
          ? Math.floor(Math.random() * 30) + 70
          : // 70-100% for approved
            status === "denied"
            ? Math.floor(Math.random() * 30)
            : // 0-30% for denied
              Math.floor(Math.random() * 60) + 20 // 20-80% for active

      const noPercentage = 100 - yesPercentage

      proposals.push({
        id: i,
        title: `Proposal ${i}`,
        description:
          "Lorem ipsum dolor sit amet consectetur. Cursus lorem viverra non commodo etiam a viverra. Dictum egestas eget feugiat sit nullam integer.",
        status,
        votingTag: `#${Math.floor(Math.random() * 100)}`,
        yesPercentage,
        noPercentage,
        totalVotes: Math.floor(Math.random() * 100) + 10,
        createdBy: "03ad...753",
        creatorAvatar: "https://res.cloudinary.com/dlinprg6k/image/upload/v1742431389/avatars/1742431389019-6362722285.jpg",
        ...(status === "active"
          ? {
              endsIn: `${Math.floor(Math.random() * 12)}h:${Math.floor(Math.random() * 60)}m:${Math.floor(Math.random() * 60)}s`,
            }
          : {}),
        ...(status !== "active"
          ? {
              timestamp: `${Math.floor(Math.random() * 30) + 1}th July 2024, ${Math.floor(Math.random() * 12)}:${Math.floor(
                Math.random() * 60,
              )
                .toString()
                .padStart(2, "0")}pm`,
            }
          : {}),
      })
    }

    return proposals
  }

  const [proposals, setProposals] = useState<Proposal[]>(generateProposals())
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(9)

  const deleteProposal = (id: number) => {
    setProposals(proposals.filter((proposal) => proposal.id !== id))
  }

  const voteOnProposal = (id: number, vote: "yes" | "no") => {
    // In a real app, this would send a transaction to the blockchain
    console.log(`Voted ${vote} on proposal ${id}`)
  }

  // Pagination logic
  const totalPages = Math.ceil(proposals.length / itemsPerPage)

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = proposals.slice(indexOfFirstItem, indexOfLastItem)

  return {
    proposals,
    currentItems,
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    deleteProposal,
    voteOnProposal,
  }
}
