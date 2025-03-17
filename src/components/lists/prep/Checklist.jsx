import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Checklist = ({dataList, checklistTitle}) => {
  const [expandedSections, setExpandedSections] = useState({});
  const [completedItems, setCompletedItems] = useState({});
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalItems = dataList.reduce((acc, step) => {
      return acc + Object.entries(step.content).reduce((subAcc, [category, items]) => 
        subAcc + items.length, 0);
    }, 0);
  
    const completedCount = Object.keys(completedItems)
      .filter(key => !key.includes('-title')) // Exclude category title keys
      .length;
  
    setProgress((completedCount / totalItems) * 100);
  }, [completedItems]);

  const toggleSection = (stepIndex, category) => {
    setExpandedSections(prev => ({
      ...prev,
      [stepIndex]: {
        ...prev[stepIndex],
        [category]: !prev[stepIndex]?.[category]
      }
    }));
  };

  const toggleItem = (stepIndex, category, itemIndex) => {
    const key = `${stepIndex}-${category}-${itemIndex}`;
    setCompletedItems(prev => {
      const newCompleted = { ...prev };
      
      if (prev[key]) {
        delete newCompleted[key]; // Remove unchecked item from completedItems
      } else {
        newCompleted[key] = true;
      }
  
      const allCompleted = dataList[stepIndex].content[category].every((_, idx) => newCompleted[`${stepIndex}-${category}-${idx}`]);
  
      if (allCompleted) {
        newCompleted[`${stepIndex}-${category}-title`] = true;
      } else {
        delete newCompleted[`${stepIndex}-${category}-title`];
      }
  
      return newCompleted;
    });
  };

  const toggleCategoryCompletion = (stepIndex, category) => {
    const key = `${stepIndex}-${category}-title`;
    setCompletedItems(prev => {
      const isCompleted = !prev[key];
      const newCompleted = { ...prev };
  
      if (isCompleted) {
        // Mark all items in the category as completed
        newCompleted[key] = true;
        dataList[stepIndex].content[category].forEach((_, idx) => {
          newCompleted[`${stepIndex}-${category}-${idx}`] = true;
        });
      } else {
        // Remove category title key and all its items to properly decrease progress
        delete newCompleted[key];
        dataList[stepIndex].content[category].forEach((_, idx) => {
          delete newCompleted[`${stepIndex}-${category}-${idx}`];
        });
      }
  
      return newCompleted;
    });
  };
  

  const clearChecklist = () => {
    setCompletedItems({});
  };

  const getColorFromItem = (item) => {
    const match = item.match(/\((.*?)\)/); // Extracts text inside parentheses
    return match ? match[1].split('-') : []; // Splits colors if multiple
  };

  return (
    <Container>
        <PrepGuide>
            <TitleContainer>
                <OrnamentContainer>
                    <TopLeftOrnament />
                    <h1>{checklistTitle}</h1>
                    <TopRightOrnament />
                </OrnamentContainer>
                <BlackLine />
            </TitleContainer>
            
            {dataList.map((step, stepIndex) => (
                <StepContainer key={stepIndex}>
                    <StepTitle>{step.title}</StepTitle>
                    <div>
                        {Object.entries(step.content).map(([category, items]) => (
                        <div key={category}>
                            <CategoryHeader 
                            onClick={() => toggleSection(stepIndex, category)}
                            $isOpen={expandedSections[stepIndex]?.[category]}
                            >
                                <CategoryTitle 
                                    $isCompleted={completedItems[`${stepIndex}-${category}-title`]}
                                    onClick={(e) => { e.stopPropagation(); toggleCategoryCompletion(stepIndex, category); }}
                                >
                                    {category === 'items' 
                                    ? 'General Items' 
                                    : category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
                                    }
                                </CategoryTitle>
                                <ToggleIcon $isOpen={expandedSections[stepIndex]?.[category]} />
                            </CategoryHeader>
                            
                            {expandedSections[stepIndex]?.[category] && (
                            <ItemList>
                                {items.map((item, itemIndex) => {
                                const key = `${stepIndex}-${category}-${itemIndex}`;
                                const colors = getColorFromItem(item);

                                return (
                                    <ListItem 
                                        key={itemIndex}
                                        $isCompleted={completedItems[key]}
                                        onClick={() => toggleItem(stepIndex, category, itemIndex)}
                                    >
                                        {item.replace(/\(.*?\)/, '')}
                                        {colors.map((color, i) => (
                                            <ColorBox key={i} color={color} />
                                        ))}
                                    </ListItem>
                                );
                                })}
                            </ItemList>
                            )}
                        </div>
                        ))}
                    </div>
                </StepContainer>
            ))}
            <OrnamentContainer>
                <BottomLeftOrnament />
                    <ButtonsContainer>
                        <ClearButton onClick={clearChecklist}>Clear</ClearButton>
                    </ButtonsContainer>
                <BottomRightOrnament />
            </OrnamentContainer>
            <ProgressContainer>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--text-font)', color: 'var(--white)' }}>
                <span>Preparation Progress:</span>
                <span>{Math.round(progress)}%</span>
            </div>
            <ProgressBar>
                <ProgressFill $percentage={progress} />
            </ProgressBar>
            </ProgressContainer>
        </PrepGuide>
        <BlackLine />
    </Container>
  );
};

/* Styled Components */
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: auto;
    padding-top: 10rem;
    background: var(--white);

    @media (max-width: 600px) {
        padding-top: 3rem;
    }
`;

const PrepGuide = styled.div`
  padding: 1rem;
  width: 100%;
  background: var(--white);
`;

const StepContainer = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: var(--light-grey);
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 3rem;

  h1 {
    color: var(--highlight1);
    font-family: var(--title-font);
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
  }
`;

const StepTitle = styled.h2`
  color: var(--highlight1);
  font-family: var(--title-font);
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 0 1rem 0;
  text-align: center;
`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: var(--white);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--highlighted-box);
  }
`;

const CategoryTitle = styled.h3`
  margin: 0;
  font-family: var(--main-font);
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--black);
  text-decoration: ${props => props.$isCompleted ? 'line-through' : 'none'};
`;

const ToggleIcon = styled.span`
    width: 16px;
    height: 16px;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: ${props => props.$isOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
        border-left: 12px solid var(--highlight1);
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        margin-top: -8px;
        transition: transform 0.2s ease;
    }
`;

const ItemList = styled.ul`
  list-style: none;
  padding-left: 1rem;
  border-left: 2px solid var(--highlight1);
`;

const ListItem = styled.li`
  padding: 0.75rem 0;
  color: var(--primary);
  font-family: var(--main-font);
  font-size: 1.25rem;
  cursor: pointer;
  text-decoration: ${props => props.$isCompleted ? 'line-through' : 'none'};
  opacity: ${props => props.$isCompleted ? 0.6 : 1};
  transition: all 0.2s ease;
`;

const ColorBox = styled.span`
  display: inline-block;
  width: 8px;
  height: 12px;
  background-color: ${props => props.color};
`;

const ProgressContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: var(--black);
  z-index: 1000;
`;

const ProgressBar = styled.div`
  height: 8px;
  background: var(--light-grey);
  margin-top: 0.5rem;
`;

const ProgressFill = styled.div`
  width: ${props => props.$percentage}%;
  height: 100%;
  background: var(--primary);
  transition: width 0.3s ease;
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const ClearButton = styled.button`
    padding: 5px 10px;
    width: 80px;
    font-family: var(--text-font);
    font-size: 1.2rem;
    background: var(--black);
    color: var(--white);
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;
    align-self: flex-start;

    &:hover {
        background: var(--highlight3);
    }

    &:active {
        transform: scale(0.95);
    }
`;

const BlackLine = styled.div`
  width: 60%;
  height: 3px;
  align-self: center;
  margin-top: 3rem;
  background: var(--black);s
`;

const Ornament = styled.img`
    position: relative;
    width: 100px;
    height: 100px;
    
    @media (max-width: 600px) {
        width: 50px;
        height: 50px;
    }

    ${({ rotate }) => rotate && `rotate: ${rotate};`}
`;

const OrnamentComponent = ({ rotate, alt }) => (
    <Ornament src="/assets/corner-ornament.png" alt={alt} rotate={rotate} />
);

const TopLeftOrnament = () => <OrnamentComponent rotate="90deg" alt="Top Left Ornament" />;
const TopRightOrnament = () => <OrnamentComponent rotate="180deg" alt="Top Right Ornament" />;
const BottomLeftOrnament = () => <OrnamentComponent alt="Bottom Left Ornament" />;
const BottomRightOrnament = () => <OrnamentComponent rotate="270deg" alt="Bottom Right Ornament" />;

const OrnamentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background: var(--white);
    position: relative;
    width: 100%;
`;

export default Checklist;
