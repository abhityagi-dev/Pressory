<template>
 <div><div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"><div class="py-10 lg:px-8 px-4"><div><h1 class="text-2xl text-black text-center font-bold mb-3">
                    Fallacies
                </h1></div> <div class="flex justify-between"></div> <div class="block w-full overflow-x-auto my-8"><table class="border w-full bg-transparent border-collapse border border-slate-400 table-border"><thead class="bg-gray-500 text-white text-left"><tr><th class="px-3 align-middle py-3 text-sm font-semibold w-64">
                                Fallacy
                                <button id="fallacyDownButton" class="ml-1">
                                    ↓
                                </button> <button id="fallacyUpButton">
                                    ↑
                                </button></th> <th class="px-3 align-middle py-3 text-sm font-semibold whitespace-nowrap w-40">
                                Code
                                <button id="codeDownButton">
                                    ↓
                                </button> <button id="codeUpButton">
                                    ↑
                                </button></th> <th class="px-3 align-middle py-3 text-sm font-semibold">
                                Description
                                <button id="descDownButton">
                                    ↓
                                </button> <button id="descUpButton">
                                    ↑
                                </button></th></tr></thead> <!----> <tbody class=" "><tr><td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    Ad Hominem</a></td> <td class="align-middle text-xs md:text-base p-3">
                                AH
                            </td> <td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    You attacked your opponent's character or personal traits in an attempt to undermine their argument.</a></td></tr><tr><td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    Ambiguity</a></td> <td class="align-middle text-xs md:text-base p-3">
                                A¹
                            </td> <td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    You used a double meaning or ambiguity of language to mislead or misrepresent the truth.</a></td></tr><tr><td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    Anecdotal</a></td> <td class="align-middle text-xs md:text-base p-3">
                                A²
                            </td> <td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    You used a personal experience or an isolated example instead of a sound argument or compelling evidence.</a></td></tr><tr><td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    Appeal To Authority</a></td> <td class="align-middle text-xs md:text-base p-3">
                                ATA
                            </td> <td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    You said that because an authority thinks something, it must therefore be true.</a></td></tr><tr><td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    Appeal To Emotion</a></td> <td class="align-middle text-xs md:text-base p-3">
                                ATE
                            </td> <td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    You attempted to manipulate an emotional response in place of a valid or compelling argument.</a></td></tr><tr><td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    Appeal To Nature</a></td> <td class="align-middle text-xs md:text-base p-3">
                                ATN
                            </td> <td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    You argued that because something is ‘natural’ it is therefore valid, justified, inevitable, good or ideal.</a></td></tr><tr><td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    Bandwagon</a></td> <td class="align-middle text-xs md:text-base p-3">
                                B
                            </td> <td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    You appealed to popularity or the fact that many people do something as an attempted form of validation.</a></td></tr><tr><td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    Begging The Question</a></td> <td class="align-middle text-xs md:text-base p-3">
                                BTQ
                            </td> <td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    You presented a circular argument in which the conclusion was included in the premise.</a></td></tr><tr><td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    Black-Or-White</a></td> <td class="align-middle text-xs md:text-base p-3">
                                B/W
                            </td> <td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    You presented two alternative states as the only possibilities, when in fact more possibilities exist.</a></td></tr><tr><td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    Burden Of Proof</a></td> <td class="align-middle text-xs md:text-base p-3">
                                BOP
                            </td> <td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    You said that the burden of proof lies not with the person making the claim, but with someone else to disprove.</a></td></tr><tr><td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    Composition/Division</a></td> <td class="align-middle text-xs md:text-base p-3">
                                C/D
                            </td> <td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    You assumed that one part of something has to be applied to all, or other, parts of it; or that the whole must apply to its parts.</a></td></tr><tr><td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    False Cause</a></td> <td class="align-middle text-xs md:text-base p-3">
                                FC
                            </td> <td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    You presumed that a real or perceived relationship between things means that one is the cause of the other.</a></td></tr><tr><td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    Genetic</a></td> <td class="align-middle text-xs md:text-base p-3">
                                G
                            </td> <td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    You judged something as either good or bad on the basis of where it comes from, or from whom it came.</a></td></tr><tr><td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    Loaded Question</a></td> <td class="align-middle text-xs md:text-base p-3">
                                LQ
                            </td> <td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    You asked a question that had a presumption built into it so that it couldn't be answered without appearing guilty.</a></td></tr><tr><td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    Middle Ground</a></td> <td class="align-middle text-xs md:text-base p-3">
                                MG
                            </td> <td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    You claimed that a compromise, or middle point, between two extremes must be the truth.</a></td></tr><tr><td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    No True Scotsman</a></td> <td class="align-middle text-xs md:text-base p-3">
                                NTS
                            </td> <td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    You made what could be called an appeal to purity as a way to dismiss relevant criticisms or flaws of your argument.</a></td></tr><tr><td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    Personal Incredulity</a></td> <td class="align-middle text-xs md:text-base p-3">
                                PI
                            </td> <td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    Because you found something difficult to understand, or are unaware of how it works, you made out like it's probably not true.</a></td></tr><tr><td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    Slippery Slope</a></td> <td class="align-middle text-xs md:text-base p-3">
                                SS
                            </td> <td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    You said that if we allow A to happen, then Z will eventually happen too, therefore A should not happen.</a></td></tr><tr><td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    Special Pleading</a></td> <td class="align-middle text-xs md:text-base p-3">
                                SP
                            </td> <td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    You moved the goalposts or made up an exception when your claim was shown to be false.</a></td></tr><tr><td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    Strawman</a></td> <td class="align-middle text-xs md:text-base p-3">
                                S
                            </td> <td class="align-middle text-xs md:text-base p-3"><a href="" class="text-sky-500 cursor-default">
                                    You misrepresented someone's argument to make it easier to attack.</a></td></tr></tbody></table></div></div></div> <!----> <div><div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"><div class="flex mb-20 pt-8"><div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"><div><p class="text-sm text-gray-700">
                    Showing
                     
                    <span class="font-medium">1</span>
                     
                    to
                     
                    <span class="font-medium">20</span>
                     
                    of
                    
                    <span class="font-medium">24</span>
                     
                    results
                </p></div></div> <div aria-label="Pagination"><ul class="pagination relative z-0 inline-flex rounded-md -space-x-px"><li class="pagination-item"><button type="button" disabled="disabled" class="mx-2 py-2 opacity-40">
                        First
                    </button></li> <li class="relative inline-flex items-center px-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"><button type="button" disabled="disabled" class="opacity-40"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></button></li> <li class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center border text-sm font-medium"><button id="innerNumbers" type="button" disabled="disabled" class="active">
                        1
                    </button></li><li class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center border text-sm font-medium"><button id="innerNumbers" type="button" class="">
                        2
                    </button></li> <li class="relative inline-flex items-center px-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"><button type="button" class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button></li> <li class="pagination-item"><button type="button" class="mx-2 py-2">
                        Last
                    </button></li></ul></div></div></div></div></div> 
                      
    </template>
    <script>
    export default {
        name:"FallaciesComponent"
    }
    </script>